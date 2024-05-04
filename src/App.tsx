"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import { PPMonument, space_grotesk } from "@/utils/fonts"
import NewContact from "./components/sections/contact/contact"
import About from "./components/about/about"
import Projects from "./components/sections/Projects/projects"
import Hero from "./components/sections/Header/hero"

export default function App() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <main className={`${space_grotesk.variable} ${PPMonument.variable}`}>
          <Hero />
          <About />
          <Projects />
        </main>
        <NewContact />
      </LazyMotion>
    </>
  )
}
