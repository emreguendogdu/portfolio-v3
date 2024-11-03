"use client"

import "./projects.scss"
import React, { useRef } from "react"
import { projectContents } from "../../../../content/projectContents"
import { kebabCase } from "@/utils/utils"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import Project from "./project"
import { poppins } from "@/utils/fonts"

export default function Projects() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  return (
    <>
      {/* <Cursor hovered={hovered} /> */}
      <section
        className={`projects-section ${poppins.variable}`}
        id="projects"
        ref={targetRef}
      >
        <h1 className="big-title">
          Selected Projects ({projectContents.length})
        </h1>
        <div className="projects">
          {projectContents.map((project, i) => {
            const { title, tags, href } = project
            const kebabTitle = kebabCase(title)
            const src = `/assets/images/projects/${kebabTitle}.webp`
            const targetScale = 1 - (projectContents.length - i) * 0.05
            return (
              <React.Fragment key={`pr__${i}`}>
                <Project
                  title={title}
                  tags={tags}
                  href={href}
                  src={src}
                  i={i}
                  globalProgress={scrollYProgress}
                  range={[i * (1 / projectContents.length), 1]}
                  targetScale={targetScale}
                />
              </React.Fragment>
            )
          })}
        </div>
        <a
          className="more-projects"
          href="https://github.com/osmangund?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Projects
        </a>
      </section>
    </>
  )
}
