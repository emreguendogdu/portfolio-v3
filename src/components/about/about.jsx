"use client"

import { useRef } from "react"
import { useScroll, motion, useTransform } from "framer-motion"
import "./about.scss"
import { poppins } from "@/utils/fonts"
import Triangle from "../triangle/triangle"
import { Paragraph } from "../textopacityonscroll"
import useMatchMedia from "@/hooks/useMatchMedia"

const tl = {
  SECTION_OPACITY_END: 0.125,
  ENTRY_START: 0.125,
  ENTRY_END: 0.325,
  TRIANGLE_START: 0.325,
  BODY_Y_START: 0.425,
  ENTRY_OPACITY_END: 0.45,
  BODY_Y_END: 0.525,
  TRIANGLE_END: 0.725,
}

export default function About() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const isMobile = useMatchMedia("(max-width: 768px)")

  const SECTION_OPACITY = useTransform(
    scrollYProgress,
    [0, tl.SECTION_OPACITY_END, tl.TRIANGLE_END, 0.9],
    [0, 1, 1, 0]
  )

  const ENTRY_OPACITY = useTransform(
    scrollYProgress,
    [tl.ENTRY_START, tl.ENTRY_END, tl.TRIANGLE_START, tl.ENTRY_OPACITY_END],
    [0, 1, 1, 0]
  )

  const ENTRY_Y = useTransform(
    scrollYProgress,
    [tl.ENTRY_START, tl.ENTRY_END, tl.TRIANGLE_END],
    ["50%", "0%", "-800%"]
  )

  const ENTRY_SCALE = useTransform(
    scrollYProgress,
    [tl.ENTRY_START, tl.ENTRY_END],
    [0.8, 1]
  )

  const TRIANGLE_OPACITY = useTransform(
    scrollYProgress,
    [tl.ENTRY_START, tl.ENTRY_END],
    [0, 0.2]
  )

  const TRIANGLE_WIDTH = useTransform(
    scrollYProgress,
    [tl.TRIANGLE_START, tl.TRIANGLE_END],
    ["200px", "2400px"]
  )

  const BODY_OPACITY = useTransform(
    scrollYProgress,
    isMobile
      ? [tl.BODY_Y_END, tl.BODY_Y_END + 0.01]
      : [tl.TRIANGLE_START, tl.TRIANGLE_START + 0.01],
    [0, 1]
  )

  const BODY_Y = useTransform(
    scrollYProgress,
    [tl.BODY_Y_START, tl.BODY_Y_END],
    ["210%", "0%"]
  )

  const BODY_TEXT_GRADIENT_OPACITY = useTransform(
    scrollYProgress,
    [tl.BODY_Y_END, tl.TRIANGLE_END],
    [0, 1]
  )

  return (
    <motion.section
      id="about"
      className={poppins.variable}
      ref={targetRef}
      style={{ opacity: SECTION_OPACITY }}
    >
      <div className="sticky">
        <motion.div
          style={{
            opacity: ENTRY_OPACITY,
            translateY: ENTRY_Y,
            scale: ENTRY_SCALE,
          }}
          className="entry"
        >
          <h1>I develop engaging digital experiences.</h1>
        </motion.div>

        <Triangle
          style={{ "--width": TRIANGLE_WIDTH, opacity: TRIANGLE_OPACITY }}
          classes="middle"
        />

        <motion.div
          style={{
            opacity: BODY_OPACITY,
            translateY: BODY_Y,
            "--width": TRIANGLE_WIDTH,
          }}
          className="body"
        >
          <p className="indented-text">
            I'm a <span className="highlight">front end developer </span>with a
            passion for creating beautiful user interfaces and smooth user
            experiences.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
