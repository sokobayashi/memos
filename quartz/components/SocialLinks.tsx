import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot } from "../util/path"
import styles from "./styles/socialLinks.scss"

export default (() => {
  function SocialLinks({ fileData }: QuartzComponentProps) {
    const baseDir = fileData.slug === "404" ? "." : pathToRoot(fileData.slug!)
    const bandcampIcon = joinSegments(baseDir, "static/bandcamp.svg")
    const xIcon = joinSegments(baseDir, "static/x.svg")
    const instagramIcon = joinSegments(baseDir, "static/instagram.svg")
    const soundcloudIcon = joinSegments(baseDir, "static/soundcloud.svg")

    return (
      <div class="social-links">
        <a
          href="https://skrtmusc.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bandcamp"
          title="Bandcamp"
        >
          <img src={bandcampIcon} alt="Bandcamp" />
        </a>

        <a
          href="https://x.com/sketchsketch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="X"
        >
          <img src={xIcon} alt="X" />
        </a>

        <a
          href="https://www.instagram.com/begard_sokobayashi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://soundcloud.com/sketchsketch"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SoundCloud"
          title="SoundCloud"
        >
          <img src={soundcloudIcon} alt="SoundCloud" />
        </a>
      </div>
    )
  }

  SocialLinks.css = styles
  return SocialLinks
}) satisfies QuartzComponentConstructor