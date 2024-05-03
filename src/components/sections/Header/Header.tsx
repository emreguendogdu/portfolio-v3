import { motion, useScroll, useTransform } from "framer-motion"
import "./Header.scss"
import ScrollIcon from "./ScrollIcon"
import React, { useRef } from "react"
import Paragraph from "./Character"
import { PRELOADER_DURATION } from "@/components/PreLoader/anims"
import Scene from "@/components/3dmodels/scene"

const h1 = "OSMAN EMRE GUNDOGDU"
const p = "Front end developer and UI/UX designer based in Turkey."

export default function Header() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])
  //! Big text comes from bottom, letter by letter. Then small text appears.
  const VARIANTS_SYNCED_WITH_PRELOADER = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: PRELOADER_DURATION - 0.4,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.header ref={targetRef} style={{ opacity }}>
      <motion.div className="sticky">
        <motion.div className="container text-container">
          <motion.div
            variants={VARIANTS_SYNCED_WITH_PRELOADER}
            initial="hidden"
            animate="visible"
          >
            <Paragraph paragraph={h1} Element="h1" />
          </motion.div>
          {/* <Paragraph paragraph={p} Element="p" /> */}
        </motion.div>
        <div className="container circle-container">
          <Scene />
        </div>
        <ScrollIcon />
      </motion.div>
    </motion.header>
  )
}
