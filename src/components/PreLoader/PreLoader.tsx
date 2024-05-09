"use client"

import { anim } from "@/utils/anims"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { curve, slide, text } from "./anims"
import "./PreLoader.scss"
import { poppins } from "@/utils/fonts"

export default function PreLoader({ children }: any) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    resize()
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  const hidePreLoader = () => {
    setIsVisible(false)
  }

  return (
    <div
      id="preloader"
      className={`${poppins.variable} ${isVisible ? "" : "hidden"}`}
    >
      <motion.p {...anim(text)} onAnimationComplete={hidePreLoader}>
        Osman Emre Gundogdu
        <span className="smaller">
          <br />
          Front End Developer
        </span>
      </motion.p>
      <div id="background" style={{ opacity: dimensions.width > 0 ? 0 : 1 }} />
      {dimensions.width > 0 && <SVG {...dimensions} />}
      {children}
    </div>
  )
}

function SVG({ width, height }: { width: number; height: number }) {
  const initialPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 300`
  const targetPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 300`
  return (
    <motion.svg {...anim(slide)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
      <defs>
        <linearGradient id="MyGradient">
          <stop offset="0%" stop-color="var(--preloader-second-color)" />
          <stop offset="95%" stop-color="var(--preloader-first-color)" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
