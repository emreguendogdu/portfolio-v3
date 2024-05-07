"use client"

import { ChevronDown } from "@/components/icons/ChevronDown"
import "./hero.scss"
import { motion } from "framer-motion"
import { TEXT_TO_LETTER, anim, textToLetter } from "@/utils/anims"
import { PPMonument, poppins } from "@/utils/fonts"
import { LinkedinLogo } from "@/components/icons/Linkedin"
import { GithubLogo } from "@/components/icons/Github"
import Link from "next/link"
import Triangle from "@/components/triangle/triangle"

export default function Hero() {
  return (
    <>
      <section id="hero" className={`${poppins.variable} `}>
        <div className="div1">
          <h1>Osman Emre Gundogdu</h1>
          <h2>Front End Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, consectetur!
          </p>
        </div>
        <div className="right">
          <Triangle classes="middle" />
          <Triangle />
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
