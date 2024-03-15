"use client"

import { useEffect } from "react"
import { Bars } from "../icons/Bars"
import "./Nav.scss"
import PropTypes from "prop-types"
import { handleNavPage, handleNavSection } from "../../utils/links"
import Link from "next/link"
import { dance, manrope } from "@/utils/fonts"

interface NavLinkProps {
  link: {
    title: string
    navSection?: boolean
  }
  toggleMenu: () => void
}

const navTitles = [
  { title: "Projects" },
  { title: "Book Notes", navSection: false },
  { title: "Contact" },
]

const handleScroll = () => {
  let prevScrollPos = window.scrollY
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")
    const currentScrollPos = window.scrollY

    prevScrollPos < currentScrollPos
      ? nav?.classList.add("hide")
      : nav?.classList.remove("hide")

    prevScrollPos = currentScrollPos
  })
}

const NavLink = ({
  link: { title, navSection = true },
  toggleMenu,
}: NavLinkProps) => {
  return navSection ? (
    <li>
      <Link href={handleNavSection(title)} onClick={toggleMenu}>
        {title}
      </Link>
    </li>
  ) : (
    <li>
      <Link href={handleNavPage(title)} onClick={toggleMenu}>
        {title}
      </Link>
    </li>
  )
}

export default function Nav() {
  const toggleMenu = () => {
    const nav = document.querySelector("nav")
    const ul = nav?.querySelector("ul")
    const barsCheckbox = nav?.querySelector(
      "#bars-checkbox"
    ) as HTMLInputElement
    barsCheckbox.checked = false
    if (ul) {
      ul.style.left = "100%"
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <nav className={manrope.variable}>
      <a id="logo" href="/" className={dance.variable}>
        OG.
      </a>
      <input type="checkbox" name="bars-checkbox" id="bars-checkbox" />
      <label htmlFor="bars-checkbox" className="bars-label">
        <Bars className="bars" />
      </label>
      <ul>
        {navTitles?.map((link, i) => (
          <NavLink key={i} link={link} toggleMenu={toggleMenu} />
        ))}
      </ul>
    </nav>
  )
}

NavLink.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    navSection: PropTypes.bool,
  }).isRequired,
  toggleMenu: PropTypes.func,
}
