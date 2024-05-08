"use client"

import { ChevronDown } from "@/components/icons/ChevronDown"
import "./hero.scss"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { poppins } from "@/utils/fonts"
import Link from "next/link"
import Triangle from "@/components/triangle/triangle"
import { anim } from "@/utils/anims"
import { useRef } from "react"

const CONTAINER_VARIANTS = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 1,
    },
  },
}

const DELAYED_NAME_VARIANTS = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.25,
    },
  },
}

const TEXT_VARIANTS = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
}

export default function Hero() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  const SECTION_OPACITY = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  return (
    <>
      <motion.section
        id="hero"
        className={`${poppins.variable} `}
        ref={targetRef}
        style={{ opacity: SECTION_OPACITY }}
      >
        <div className="hero-content">
          <motion.div {...anim(CONTAINER_VARIANTS)}>
            <motion.div {...anim(DELAYED_NAME_VARIANTS)}>
              <motion.h1 variants={TEXT_VARIANTS} className="title">
                Osman&nbsp;
              </motion.h1>
              <motion.h1 variants={TEXT_VARIANTS} className="title circle">
                Emre&nbsp;
              </motion.h1>
              <motion.h1 variants={TEXT_VARIANTS} className="title">
                Gundogdu
              </motion.h1>
              <motion.div variants={DELAYED_NAME_VARIANTS}>
                <h2>
                  <span className="underline">Front End</span> Developer
                </h2>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: -10,
              transition: {
                repeat: Infinity,
                ease: "easeInOut",
                duration: 0.5,
                repeatType: "reverse",
              },
            }}
            className="chevrondown-container"
          >
            <ChevronDown width="64px" height="64px" className="chevrondown" />
          </motion.div>
        </div>
        <div className="empty-container"></div>
      </motion.section>
    </>
  )
}
