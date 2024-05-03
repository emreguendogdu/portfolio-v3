"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import MouseTrailer from "@/components/MouseTrailer/MouseTrailer"
import Contact from "@/components/sections/Contact/Contact"
import Header from "@/components/sections/Header/Header"
import { PPMonument, space_grotesk } from "@/utils/fonts"
import NewContact from "./components/sections/contact/contact"
import useLenis from "./hooks/useLenis"
import About from "./components/about/about"
import Projects from "./components/sections/Projects/projects"

export default function App() {
  // useLenis()
  return (
    <>
      <LazyMotion features={domAnimation}>
        {/* <MouseTrailer /> */}
        <main className={`${space_grotesk.variable} ${PPMonument.variable}`}>
          <Header />
          <About />
          <Projects />
        </main>
        <NewContact />
      </LazyMotion>
    </>
  )
}
