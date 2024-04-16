import { PPMonument } from "@/utils/fonts"
import "./newcontact.scss"
import Pillar1 from "@/components/pillar1"
import { useScroll, useTransform, motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { anim } from "@/utils/anims"
import Pillar from "./pillar"

const timeline = {
  start: 0,
  PILLAR_APPEAR_START: 0.4,
  PILLAR_APPEAR_END: 0.8,
  BIGTEXT_PARALLAX_END: 0.8,
  SMALLTEXT_OPACITY_START: 0.9,
  end: 1,
}

export default function NewContact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  const SMALLTEXT_OPACITY = useTransform(
    scrollYProgress,
    [timeline.SMALLTEXT_OPACITY_START, 1],
    [0, 1]
  )

  const TRIANGLE_OPACITY = useTransform(
    scrollYProgress,
    [timeline.SMALLTEXT_OPACITY_START, 1],
    [0.1, 0.4]
  )

  const BIGTEXT_OPACITY = useTransform(
    scrollYProgress,
    [timeline.start, timeline.end],
    [0, 1]
  )

  const LIGHT_ANIMATION = {
    initial: { opacity: 0 },
    enter: {
      opacity: Math.random(), // This will generate a random opacity between 0 and 1
      transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
    },
  }

  return (
    <>
      <div className="scroll" />
      <section
        id="new-contact"
        className={`${PPMonument.variable}`}
        ref={containerRef}
      >
        <div className="pillars">
          <Pillar
            scrollYProgress={scrollYProgress}
            tl={timeline}
            position="left"
          />
          <Pillar
            scrollYProgress={scrollYProgress}
            tl={timeline}
            position="right"
          />
        </div>
        <div className="container">
          <div className="triangle-container">
            <motion.div
              className="triangle"
              style={{ opacity: TRIANGLE_OPACITY }}
            />
          </div>
          <div className="contact-text">
            <h1>
              {"Contact".split("").map((letter, i) => {
                const random = Math.floor(Math.random() * -175) - 75
                const PARALLAX_TEXT = useTransform(
                  scrollYProgress,
                  [timeline.start, timeline.BIGTEXT_PARALLAX_END],
                  [random, 0]
                )
                return (
                  <motion.span
                    style={{ top: PARALLAX_TEXT, opacity: BIGTEXT_OPACITY }}
                    key={`cl_${i}`}
                  >
                    {letter}
                  </motion.span>
                )
              })}
            </h1>
            <motion.p style={{ opacity: SMALLTEXT_OPACITY }}>
              Write down your ideas and let&apos;s create a masterpiece
              together.
            </motion.p>
          </div>
        </div>
      </section>
      <div className="scroll" />
    </>
  )
}
