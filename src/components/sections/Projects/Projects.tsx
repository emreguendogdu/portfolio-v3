import "./Projects.scss"
import MacWindowEffect from "@/components/MacWindowEffect/MacWindowEffect"
import { projectContents } from "@/../content/projectContents"
import { kebabCase } from "@/utils/kebabCase"
import { m } from "framer-motion"
import { projectImgLink } from "@/utils/links"
import Image from "@/components/Image/Image"
import ArrowLink from "@/components/icons/ArrowLink"
import { GithubLogo } from "@/components/icons/Github"

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
      {/* <m.h1 className="title" variants={projectVariants}>
        {title}
      </m.h1> */}
      <div className="project__image">
        {/* <MacWindowEffect /> */}
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
        <m.div className="project__links" variants={projectVariants}>
          <m.a
            href={`/projects/${kebabCase(title)}`}
            rel="noreferrer"
            className="button title-button"
            variants={projectVariants}
          >
            {title}
          </m.a>
          <div className="container">
            <a
              href={`https://github.com/osmangund/${kebabCase(title)}`}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <GithubLogo fill="white" />
            </a>
            <a
              href={liveHref}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <ArrowLink fill="white" />
            </a>
          </div>
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
