"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import Contact from "./components/sections/contact/contact"
import About from "./components/about/about"
import Projects from "./components/sections/Projects/projects"
import Hero from "./components/sections/Header/hero"

export default function App() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </LazyMotion>
    </>
  )
}
