import Link from "next/link"
import "./footer.scss"
import { GithubLogo } from "@/components/icons/Github"
import { LinkedinLogo } from "@/components/icons/Linkedin"
import { YoutubeLogo } from "@/components/icons/Youtube"
import { poppins } from "@/utils/fonts"
import { useEffect, useState } from "react"

export default function Footer() {
  const [date, setDate] = useState(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Istanbul",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  )
  return (
    <>
      <footer className={`${poppins.variable}`}>
        <div className="container">
          <h1 className="container-title">Navigation</h1>
          <div className="container-links">
            <Link href="/">Home</Link>
            <Link href="/ajans">Ajans</Link>
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
            <p>{date.toString()} - GMT+3, Turkey</p>
          </div>
          <div className="links"></div>
          2024 ® All rights reserved
        </div>
      </footer>
    </>
  )
}
