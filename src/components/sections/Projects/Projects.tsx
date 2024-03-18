import "./Projects.scss"
import MacWindowEffect from "@/components/MacWindowEffect/MacWindowEffect"
import { projectContents } from "@/../content/projectContents"
import { kebabCase } from "@/utils/kebabCase"
import { m } from "framer-motion"
import { projectImgLink } from "@/utils/links"
import Image from "@/components/Image/Image"

interface ProjectProps {
  project: {
    title: string
    body: string
    tags: string[]
    color?: string
    liveLink?: string
  }
}

const projectVariants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.1618 },
  },
}

function Project({
  project: { title, body, tags, color, liveLink },
}: ProjectProps) {
  const src = projectImgLink(title)
  const liveHref = liveLink
    ? liveLink
    : `https://osmangund.github.io/${kebabCase(title)}`
  return (
    <m.div
      variants={projectVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ amount: 0.2, once: true }}
      className={`project ${kebabCase(title)}`}
    >
      <div className="project__image">
        <MacWindowEffect />
        <a
          href={liveHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Go to ${title} demo.`}
        >
          <Image
            src={src}
            alt={`${title} project screenshot.`}
            ariaHidden={true}
          />
        </a>
      </div>
      <div className="project__content">
        <m.div className="tags" variants={projectVariants}>
          {tags.map((tag, i) => (
            <p key={i} className="tag">
              {tag}
            </p>
          ))}
        </m.div>
        <m.h1 className="title" variants={projectVariants}>
          {title}
        </m.h1>
        <m.p className="body" variants={projectVariants}>
          {body}
        </m.p>
        <m.div className="project__links" variants={projectVariants}>
          <a
            href={`https://github.com/osmangund/${kebabCase(title)}`}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-text="Source code"
            data-color={color}
          >
            Source code
          </a>
          <a
            href={liveHref}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-text="Live"
            data-color={color}
          >
            Live
          </a>
        </m.div>
      </div>
    </m.div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      {projectContents.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </section>
  )
}
