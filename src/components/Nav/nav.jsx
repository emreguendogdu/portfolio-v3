"use client"

import { useEffect, useState } from "react"
import { Bars } from "../icons/Bars"
import "./nav.scss"
import PropTypes from "prop-types"
import { handleNavPage, handleNavSection } from "@/utils/links"
import Link from "next/link"
import { PPMonument, dance, inter, manrope, poppins } from "@/utils/fonts"
import Triangle from "../triangle/triangle"
import { motion } from "framer-motion"

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
  return () => window.removeEventListener("scroll", () => {})
}

const NavLink = ({ link: { title, navSection = true }, setIsOpen }) => {
  if (navSection) {
    return (
      <li>
        <Link
          href={handleNavSection(title)}
          onClick={() => {
            setIsOpen((isOpen) => !isOpen)
          }}
        >
          {title}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <Link
        href={handleNavPage(title)}
        onClick={() => {
          setIsOpen((isOpen) => !isOpen)
        }}
      >
        {title}
      </Link>
    </li>
  )
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className={`${manrope.variable} ${poppins.variable} ${inter.variable} ${PPMonument.variable}`}
    >
      <a id="logo" href="/" className={dance.variable}>
        OG.
      </a>
      <div
        onClick={() => {
          setIsOpen((isOpen) => !isOpen)
        }}
        className="bars-container"
      >
        <Bars className="bars" />
      </div>
      <motion.ul animate={{ left: isOpen ? "0" : "-100%" }}>
        {navTitles?.map((link, i) => (
          <NavLink key={i} link={link} setIsOpen={setIsOpen} />
        ))}
      </motion.ul>
    </nav>
  )
}
