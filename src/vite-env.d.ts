/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the monarch-releases Cloudflare Worker (see /worker), e.g. https://monarch-releases.<subdomain>.workers.dev */
  readonly VITE_RELEASES_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
