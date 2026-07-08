// Proxies release metadata + the installer asset out of the private
// arnislvdev/monarch repo. The GitHub token never reaches the browser —
// GitHub Pages is static and can't hold a repo-read secret itself, so this
// Worker is the only thing allowed to know it. Mirrors the auth approach the
// app's own in-app updater uses (internal/updater/privategithub), minus the
// manual redirect handling: unlike Go's http.Client, the platform fetch()
// spec already strips Authorization on a cross-origin redirect, so following
// GitHub's asset redirect to its signed URL "just works".

export interface Env {
  GITHUB_TOKEN: string;
  GITHUB_REPO: string;
  ASSET_PATTERN: string;
}

const GITHUB_API = "https://api.github.com";

function githubHeaders(env: Env, accept: string): HeadersInit {
  return {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    Accept: accept,
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "monarch-releases-worker",
  };
}

interface ReleaseAsset {
  id: number;
  name: string;
  size: number;
  url: string;
  content_type: string;
}

interface Release {
  tag_name: string;
  published_at: string;
  assets: ReleaseAsset[];
}

async function fetchLatestRelease(env: Env): Promise<Release | null> {
  const resp = await fetch(`${GITHUB_API}/repos/${env.GITHUB_REPO}/releases/latest`, {
    headers: githubHeaders(env, "application/vnd.github+json"),
  });
  if (resp.status === 404) return null;
  if (!resp.ok) throw new Error(`GitHub releases/latest: HTTP ${resp.status}`);
  return resp.json();
}

function findInstaller(release: Release, pattern: string): ReleaseAsset | null {
  const re = new RegExp(pattern, "i");
  return release.assets.find((a) => re.test(a.name)) ?? null;
}

function corsJson(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=60",
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/latest") {
      const release = await fetchLatestRelease(env);
      if (!release) return corsJson({ error: "no releases found" }, 404);

      const asset = findInstaller(release, env.ASSET_PATTERN);
      if (!asset) return corsJson({ error: "no installer asset on latest release" }, 404);

      return corsJson({
        version: release.tag_name,
        publishedAt: release.published_at,
        filename: asset.name,
        size: asset.size,
      });
    }

    if (url.pathname === "/download") {
      const release = await fetchLatestRelease(env);
      if (!release) return new Response("no releases found", { status: 404 });

      const asset = findInstaller(release, env.ASSET_PATTERN);
      if (!asset) return new Response("no installer asset on latest release", { status: 404 });

      const assetResp = await fetch(asset.url, {
        headers: githubHeaders(env, "application/octet-stream"),
      });
      if (!assetResp.ok) {
        return new Response(`asset fetch failed: HTTP ${assetResp.status}`, { status: 502 });
      }

      return new Response(assetResp.body, {
        headers: {
          "Content-Type": asset.content_type || "application/octet-stream",
          "Content-Disposition": `attachment; filename="${asset.name}"`,
          "Content-Length": String(asset.size),
        },
      });
    }

    return new Response("not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
