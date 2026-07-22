import { H2, LegalPage, P, Ul } from "@/components/legal/legal-page"

export function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 17, 2026">
      <P>
        Monarch App ("Monarch," "the app") is a desktop application for
        tracking and watching anime and reading manga and novels. This policy
        explains what data the app handles and where it goes.
      </P>

      <H2>The short version</H2>
      <P>
        Monarch has no servers of its own. The developer does not collect,
        store, sell, or share any personal data. Everything the app knows
        lives on your device. The only data that leaves your device goes
        directly to services you choose to connect, or content sources you
        choose to use.
      </P>

      <H2>Data stored on your device</H2>
      <P>The app keeps the following locally on your computer only:</P>
      <Ul>
        <li>Your settings and preferences.</li>
        <li>
          A cache of media metadata and images, so the app loads faster and
          works offline.
        </li>
        <li>
          If you sign in to AniList: your AniList access token, so you stay
          signed in.
        </li>
        <li>
          Your local library files (for the local manga and media features).
          The app only reads these from folders you point it at.
        </li>
      </Ul>
      <P>
        You can remove all of this at any time by signing out and
        uninstalling the app.
      </P>

      <H2>Services the app connects to</H2>
      <P>
        Monarch talks directly to third party services on your behalf. The
        developer never sees this traffic.
      </P>
      <Ul>
        <li>
          <strong className="text-foreground">AniList</strong> (anilist.co).
          If you sign in, the app accesses your AniList account (username,
          avatar, anime and manga lists, progress, and scores) and updates it
          when you track something. This data passes only between your
          device and AniList, under{" "}
          <a
            href="https://anilist.co/terms"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-2 hover:text-primary"
          >
            AniList's privacy policy
          </a>
          .
        </li>
        <li>
          <strong className="text-foreground">Discord</strong>. If you enable
          Rich Presence, the app tells your locally running Discord client
          what you are watching or reading, so it can show your activity.
          This feature is optional and configurable, and it only passes data
          between your device and your own Discord client. What Discord
          displays is governed by Discord's own privacy policy.
        </li>
        <li>
          <strong className="text-foreground">
            Content and metadata sources
          </strong>
          . When you search for, stream, or read content, the app contacts
          the relevant public sources and metadata providers (such as theme
          song and artwork databases) directly from your device, the same way
          a web browser would. Those sites can see your IP address, the same
          as any website you visit.
        </li>
      </Ul>

      <H2>Uninstalling</H2>
      <P>
        If you uninstall Monarch, the confirmation dialog asks why (an
        optional reason plus free text details). If you pick a reason, it is
        sent to the developer so the app can be improved. Nothing else about
        you or your device is included. Closing the dialog, or uninstalling
        without picking a reason, sends nothing.
      </P>

      <H2>Peer to peer streaming</H2>
      <P>
        Monarch's streaming feature uses the BitTorrent protocol. When you
        stream this way, your IP address is visible to other peers in the
        swarm. This is how peer to peer networking works, and it is not
        something the developer controls. If you are not comfortable with
        this, do not use the streaming feature, or use it behind a VPN.
      </P>

      <H2>What the app does not do</H2>
      <Ul>
        <li>
          No analytics, telemetry, or usage tracking of any kind, beyond the
          optional uninstall reason described above.
        </li>
        <li>No advertising and no ad identifiers.</li>
        <li>No selling or sharing of data. There is nothing collected to sell.</li>
        <li>
          No account with the developer. The app works without one, and
          browsing works even without an AniList account.
        </li>
      </Ul>

      <H2>Children</H2>
      <P>
        Monarch does not knowingly handle data belonging to children. The app
        can display age restricted content only when the connected AniList
        account has opted into that setting on AniList's side.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        If this policy changes, the updated version will be published at this
        same location with a new "last updated" date.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about this policy can be sent to{" "}
        <a
          href="mailto:arnislvdev@gmail.com"
          className="text-foreground underline underline-offset-2 hover:text-primary"
        >
          arnislvdev@gmail.com
        </a>
        .
      </P>
    </LegalPage>
  )
}

export default PrivacyPage
