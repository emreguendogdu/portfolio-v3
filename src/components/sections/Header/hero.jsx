"use client"

import { ChevronDown } from "@/components/icons/ChevronDown"
import "./hero.scss"
import { motion } from "framer-motion"
import { TEXT_TO_LETTER, anim, textToLetter } from "@/utils/anims"
import { PPMonument } from "@/utils/fonts"
import { LinkedinLogo } from "@/components/icons/Linkedin"
import { GithubLogo } from "@/components/icons/Github"
import Link from "next/link"

const NAME_VARIANTS = {
  initial: {
    y: 200,
    rotate: 10,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.05,
      duration: 1,
      ease: "easeInOut",
    },
  }),
}
const TITLE_VARIANTS = {
  initial: {
    y: 100,
    rotate: 10,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: 0.75 + i * 0.05,
      duration: 1,
      ease: "easeInOut",
    },
  }),
}
const DESCRIPTION_VARIANTS = {
  initial: {
    y: 100,
    rotate: 15,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  }),
}

export default function Hero() {
  return (
    <>
      <section id="hero" className={`${PPMonument.variable}`}>
        <div className="text-container left">
          <h1>{textToLetter("OSMAN EMRE GUNDOGDU", NAME_VARIANTS)}</h1>
        </div>
        <div className="text-container right">
          <div className="empty-container" />
          <div className="">
            <motion.h2>
              {textToLetter("Front End Developer", TITLE_VARIANTS)}
            </motion.h2>
            <p>
              {textToLetter(
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum saepe impedit doloribus. Consequatur eligendi doloremque adipisci distinctio est. Quibusdam, quod.",
                DESCRIPTION_VARIANTS
              )}
            </p>
          </div>
          <div className="links-container">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/osmangund/"
            >
              <LinkedinLogo />
            </Link>
            <Link target="_blank" href="https://www.github.com/osmangund/">
              <GithubLogo />
            </Link>
          </div>
        </div>

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
      </section>
    </>
  )
}
