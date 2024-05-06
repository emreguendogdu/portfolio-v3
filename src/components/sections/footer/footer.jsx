import Link from "next/link"
import "./footer.scss"
import { GithubLogo } from "@/components/icons/Github"
import { LinkedinLogo } from "@/components/icons/Linkedin"
import { YoutubeLogo } from "@/components/icons/Youtube"

const dateIstanbul = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Istanbul",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
})

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <h1 className="container-title">Navigation</h1>
          <div className="container-links">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#works">Works</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/book-notes">Book Notes</Link>
          </div>
        </div>
        <div className="container">
          <h1 className="container-title">Socials</h1>
          <div className="container-links">
            <Link href="https://www.linkedin.com/in/osmangund/">
              <div className="container-link">
                <LinkedinLogo width="24px" height="24px" /> Linkedin
              </div>
            </Link>
            <Link href="https://www.github.com/osmangund/">
              <div className="container-link">
                <GithubLogo width="24px" height="24px" /> Github
              </div>
            </Link>
            <Link href="https://www.youtube.com/@osmangund/">
              <div className="container-link">
                <YoutubeLogo width="24px" height="24px" /> Youtube
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p>{dateIstanbul.toString()}, GMT+3 / Izmir, Turkey</p>
          </div>
          <div className="links"></div>
          <p>Made with 💗 by osmangund®</p>
        </div>
      </footer>
    </>
  )
}
