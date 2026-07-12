import { IconLogo } from "@/components/brand"

export function Disclaimer() {
  return (
    <footer className="relative px-6 py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <IconLogo size="sm" className="opacity-50" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Monarch doesn't provide, host, or distribute any media content.
          You are responsible for sourcing your media legally.
          The app is simply a tool to help you organize and enjoy the content you already own or have legal access to.
          By using Monarch, you agree to follow your local laws and regulations.
        </p>
        <p className="text-xs text-muted-foreground">
          Copyright requests:{" "}
          <a
            href="mailto:arnislvdev@gmail.com"
            className="text-foreground underline underline-offset-2 hover:text-primary"
          >
            arnislvdev@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}
