import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/SocialLinks.scss"

export default (() => {
  function SocialLinks(_props: QuartzComponentProps) {
    return (
      <div class="social-links">
        <a
          href="https://sktmusic.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bandcamp"
          title="Bandcamp"
        >
          <img src="/static/bandcamp.svg" alt="Bandcamp" />
        </a>

        <a
          href="https://x.com/sktechsktech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="X"
        >
          <img src="/static/x.svg" alt="X" />
        </a>

        <a
          href="https://www.instagram.com/begard_sokobayashi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <img src="/static/instagram.svg" alt="Instagram" />
        </a>

        <a
          href="https://soundcloud.com/sktechsktech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SoundCloud"
          title="SoundCloud"
        >
          <img src="/static/soundcloud.svg" alt="SoundCloud" />
        </a>
      </div>
    )
  }

  SocialLinks.css = styles
  return SocialLinks
}) satisfies QuartzComponentConstructor