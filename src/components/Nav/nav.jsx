"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Bars } from "@/components/icons/Bars"
import "./nav.scss"
import { dance, poppins } from "@/utils/fonts"
import Triangle from "@/components/ui/triangle/triangle"
import useMatchMedia from "@/hooks/useMatchMedia"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const navTitles = [
  { title: "Welcome", href: "/#hero" },
  { title: "Agency", href: "https://ruyadigital.com" },
  { title: "Projects" },
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

const NavLink = ({
  link: { title, navSection = true, href = false },
  setIsOpen,
}) => {
  return (
    <li>
      <Link
        href={href ? href : `/#${title.toLowerCase()}`}
        onClick={() => {
          setIsOpen && setIsOpen((isOpen) => !isOpen)
        }}
      >
        {title}
      </Link>
    </li>
  )
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMatchMedia("(max-width: 768px)")

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <nav className={`${poppins.variable}`}>
      <a id="logo" href="/" className={dance.variable}>
        OG.
      </a>
      {isMobile && (
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="bars-container"
        >
          <Bars className="bars" />
        </div>
      )}
      {isMobile ? (
        <motion.ul animate={{ left: isOpen ? "0" : "-100%" }}>
          {navTitles?.map((link, i) => (
            <NavLink key={i} link={link} setIsOpen={setIsOpen} />
          ))}
        </motion.ul>
      ) : (
        <ul>
          {navTitles?.map((link, i) => (
            <NavLink key={i} link={link} setIsOpen={setIsOpen} />
          ))}
        </ul>
      )}
    </nav>
  )
}
