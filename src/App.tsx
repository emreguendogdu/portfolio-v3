"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import Contact from "./components/sections/contact/contact"
import About from "./components/sections/about/about"
import Projects from "./components/sections/projects/projects"
import Hero from "./components/sections/hero/hero"
import Nav from "./components/Nav/nav"

export default function App() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </LazyMotion>
    </>
  )
}
