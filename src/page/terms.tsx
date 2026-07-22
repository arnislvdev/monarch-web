import { H2, LegalPage, P } from "@/components/legal/legal-page"

export function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="July 17, 2026">
      <P>
        These terms cover your use of Monarch App ("Monarch," "the app"), a
        desktop application for tracking and watching anime and reading
        manga and novels. By installing or using Monarch, you agree to these
        terms. If you do not agree, do not use the app.
      </P>

      <H2>What Monarch is</H2>
      <P>
        Monarch is a client application. It does not host, store, or
        distribute any video, image, text, or other media itself. It helps
        you track your progress on AniList, and it can connect to third
        party sources, extensions, and the BitTorrent network to find and
        display content on your behalf, directly from your device.
      </P>

      <H2>Your responsibility for content</H2>
      <P>
        Monarch does not control, verify, or take responsibility for content
        reachable through third party sources, extensions, or the BitTorrent
        network. You are solely responsible for what you access, and for
        making sure that use complies with the laws that apply to you,
        including copyright law. Streaming or downloading copyrighted
        material without permission is illegal in many places. The developer
        does not encourage, endorse, or take responsibility for infringing
        use of the app.
      </P>
      <P>
        If you use the peer to peer streaming feature, understand that
        BitTorrent is a public protocol: your IP address is visible to other
        peers in the swarm while you are streaming that way. This is
        inherent to how the protocol works, not something Monarch adds or
        controls.
      </P>

      <H2>Extensions and third party sources</H2>
      <P>
        Monarch supports optional extensions and provider integrations
        written by third parties. These are not reviewed, verified, or
        maintained by the developer. Installing or enabling one is your
        choice, and any content or behavior it introduces is between you and
        that extension's source, not the developer.
      </P>

      <H2>Accounts and services you connect</H2>
      <P>
        Features like AniList sign in and Discord Rich Presence connect to
        services you choose to use. Your relationship with those services is
        governed by their own terms, not this document. See the Privacy
        Policy for what data passes through Monarch when you use them.
      </P>

      <H2>No warranty</H2>
      <P>
        Monarch is provided "as is," without warranty of any kind, express or
        implied. The developer does not guarantee that the app will be
        uninterrupted, error free, secure, or fit for any particular
        purpose. Content availability, accuracy, and quality depend entirely
        on third party sources outside the developer's control.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the fullest extent permitted by law, the developer is not liable
        for any indirect, incidental, or consequential damages arising from
        your use of Monarch, including but not limited to data loss, legal
        exposure from third party content, or issues caused by extensions or
        sources you chose to use. Monarch is a free, independently developed
        application, offered without any guarantee of outcome.
      </P>

      <H2>Age restricted content</H2>
      <P>
        Monarch can display age restricted content only when the AniList
        account you connect has opted into that setting on AniList's own
        side. If you are a minor, do not enable or attempt to access age
        restricted content, and check whether local law requires parental
        consent to use this kind of app at all.
      </P>

      <H2>Intellectual property</H2>
      <P>
        Anime, manga, novel titles, artwork, and related media referenced or
        displayed in Monarch belong to their respective owners. Monarch
        claims no ownership over this content. Monarch's own code and design
        are the developer's work, provided for personal, non-commercial use.
      </P>

      <H2>Changes to these terms</H2>
      <P>
        These terms may be updated from time to time. Changes take effect
        when published at this same location with a new "last updated" date.
        Continued use of the app after a change means you accept the updated
        terms.
      </P>

      <H2>Termination</H2>
      <P>
        You can stop using Monarch at any time by uninstalling it. The
        developer may discontinue or change the app or any feature at any
        time, without notice, since it is offered free of charge.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about these terms can be sent to{" "}
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

export default TermsPage
