"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import MouseTrailer from "@/components/MouseTrailer/MouseTrailer"
import Contact from "@/components/sections/Contact/Contact"
import Header from "@/components/sections/Header/Header"
import Projects from "@/components/sections/Projects/Projects"
import { PPMonument, space_grotesk } from "@/utils/fonts"
import NewContact from "./components/sections/newcontact/newcontact"
import useLenis from "./hooks/useLenis"

export default function App() {
  // useLenis()
  return (
    <>
      <LazyMotion features={domAnimation}>
        {/* <MouseTrailer /> */}
        <main className={`${space_grotesk.variable} ${PPMonument.variable}`}>
          <Header />
          {/* <Projects /> */}
        </main>
        <NewContact />
      </LazyMotion>
    </>
  )
}
