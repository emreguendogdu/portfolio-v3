import Link from "next/link"
import "./footer.scss"
import { GithubLogo } from "@/components/icons/Github"
import { LinkedinLogo } from "@/components/icons/Linkedin"
import { YoutubeLogo } from "@/components/icons/Youtube"
import { poppins } from "@/utils/fonts"

const dateIstanbul = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Istanbul",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
})

export default function Footer() {
  return (
    <>
      <footer className={`${poppins.variable}`}>
        <div className="container">
          <h1 className="container-title">Navigation</h1>
          <div className="container-links">
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
          </div>
        </div>
        <div className="container">
          <h1 className="container-title">Socials</h1>
          <div className="container-links">
            <Link target="_blank" href="https://www.linkedin.com/in/osmangund/">
              Linkedin
            </Link>
            <Link target="_blank" href="https://www.github.com/osmangund/">
              Github
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
