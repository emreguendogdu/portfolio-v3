import Link from "next/link";
import "./footer.scss";
import { GithubLogo } from "@/components/icons/Github";
import { LinkedinLogo } from "@/components/icons/Linkedin";
import { YoutubeLogo } from "@/components/icons/Youtube";
import { poppins } from "@/utils/fonts";
import { useEffect, useState } from "react";

export default function Footer() {
  const [date, setDate] = useState(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Istanbul",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  );
  return (
    <>
      <footer className={`${poppins.variable}`}>
        <div className="container logo-container">
          <img src="/assets/svgs/logo.svg" alt="" className="logo" />
        </div>
        <div className="nav-container">
          {" "}
          <div className="container">
            <h2 className="container-title">Navigation</h2>
            <div className="container-links">
              <Link href="/">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#projects">Projects</Link>
            </div>
          </div>
          <div className="container">
            <h2 className="container-title">Socials</h2>
            <div className="container-links">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/emregnd/"
              >
                Linkedin
              </Link>
              <Link target="_blank" href="https://www.github.com/emreguendogdu/">
                Github
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <p>{date.toString()} - GMT+3, Turkey</p>
          </div>
          <div>
            <p>2024 ® All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}
