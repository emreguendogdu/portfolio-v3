import { m } from "framer-motion"
import "./Header.scss"
import ScrollIcon from "./ScrollIcon"

const delay = 2.5 // Both scrollIcon and Highlight Background uses this

const headerAnims = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.7764,
    },
  },
}

const highlightBgAnims = {
  start: {
    width: 0,
  },
  end: { width: "113%", transition: { delay: delay - 0.25 } },
}

export default function Header() {
  return (
    <m.header
      variants={headerAnims}
      initial="start"
      whileInView="end"
      viewport={{ once: true, amount: 0.5 }}
    >
      <m.div variants={headerAnims}>
        <m.h1 variants={headerAnims}>
          Hi, I&apos;m Osman. <span>🙋🏽‍♂️</span>
        </m.h1>
        <m.h2 variants={headerAnims}>Front End Developer</m.h2>
        <m.p variants={headerAnims}>
          I love building and creating on web. Especially with{" "}
          <m.span className="highlight">
            React.
            <m.span
              variants={highlightBgAnims}
              initial="start"
              whileInView="end"
              className="background"
              viewport={{ once: true, amount: 0.5 }}
            />
          </m.span>
        </m.p>
      </m.div>
      <ScrollIcon />
    </m.header>
  )
}
