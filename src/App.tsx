"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import MouseTrailer from "@/components/MouseTrailer/MouseTrailer"
import Contact from "@/components/sections/Contact/Contact"
import Header from "@/components/sections/Header/Header"
import Projects from "@/components/sections/Projects/Projects"
import { space_grotesk } from "@/utils/fonts"

export default function App() {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <MouseTrailer />
        <main className={space_grotesk.variable}>
          <Header />
          <Projects />
        </main>
        <Contact />
      </LazyMotion>
    </>
  )
}
