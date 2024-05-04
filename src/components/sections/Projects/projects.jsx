import "./projects.scss"
import React, { useState } from "react"
import { projectContents } from "../../../../content/projectContents"
import { kebabCase } from "@/utils/kebabCase"
import { PPMonument, poppins } from "@/utils/fonts"
import Image from "next/image"

export default function Projects() {
  function Project({ title, tags, href, src, i }) {
    // const imageBlurDataURL = await getBase64(`/imagesnew/${i}+1.png`)
    return (
      <div className={`project ${PPMonument.variable} ${poppins.variable}`}>
        <a href={href} target="_blank" rel="noreferrer">
          <div className="image-wrapper">
            <div className="bg-image">
              <Image
                src={`/imagesnew/${i + 1}.png`}
                alt={title}
                width={752}
                height={752}
                blurDataURL={`/imagesnew/${i + 1}-small.png`}
              />
            </div>
            <Image
              src={`${src}.png`}
              alt={title}
              width={400}
              height={500}
              placeholder="blur"
              blurDataURL={`${src}-small.png`}
              className="project-image"
            />
          </div>
          <div className="body">
            <h3 className="title">{title}</h3>
            <div className="tags">
              {tags.map((tag, i) => (
                <span key={`tag__${i}`} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </div>
    )
  }

  return (
    <>
      {/* <Cursor hovered={hovered} /> */}
      <section className="projects-section">
        <h1 className="big-title">Selected Projects (4)</h1>
        <div className="projects">
          {projectContents.map((project, i) => {
            const { title, tags, href } = project
            const kebabTitle = kebabCase(title)
            const src = `/imagesnew/${kebabTitle}`
            return (
              <React.Fragment key={`pr__${i}`}>
                <Project
                  title={title}
                  tags={tags}
                  href={href}
                  src={src}
                  i={i}
                />
              </React.Fragment>
            )
          })}
        </div>
      </section>
    </>
  )
}
