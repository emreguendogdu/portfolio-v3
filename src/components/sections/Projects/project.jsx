"use client"

import "./project.scss"
import React, { useRef } from "react"
import { projectContents } from "../../../../content/projectContents"
import { kebabCase } from "@/utils/utils"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import useMatchMedia from "@/hooks/useMatchMedia"

export default function Project({
  title,
  tags,
  href,
  src,
  i,
  targetScale,
  globalProgress,
  range,
}) {
  const projectTargetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: projectTargetRef,
    offset: ["start end", "start start"],
  })
  const isMobile = useMatchMedia("(max-width: 768px)")

  const IMAGE_SCALE = useTransform(scrollYProgress, [0, 1], [2, 1])
  const CARD_SCALE = useTransform(globalProgress, range, [1, targetScale])

  return (
    <div className="project" ref={projectTargetRef}>
      <motion.div
        className={`project-content`}
        style={{
          scale: CARD_SCALE,
          top: isMobile
            ? `calc(0vh + ${i * 25}px)`
            : `calc(-5vh + ${i * 30}px)`,
        }}
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <div className="image-wrapper">
            <motion.div className="bg-image" style={{ scale: IMAGE_SCALE }}>
              <Image
                src={`/assets/images/projects/${i + 1}.webp`}
                alt={title}
                fill
                priority={true}
              />
            </motion.div>
            <motion.div
              className="project-image-wrapper"
              style={{ scale: IMAGE_SCALE }}
            >
              <Image
                src={`${src}`}
                alt={title}
                width={400}
                height={500}
                className="project-image"
              />
            </motion.div>
          </div>
          <div className="body">
            <h1 className="title">{title}</h1>
            <div className="tags">
              {tags.map((tag, i) => (
                <span key={`tag__${i}`} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  )
}
