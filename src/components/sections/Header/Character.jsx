import { motion, m } from "framer-motion"
import "./Header.scss"
import { anim } from "@/utils/anims"
import { translate } from "./anim"
import { PRELOADER_DURATION } from "@/components/PreLoader/anims"

export default function Paragraph({ paragraph, Element }) {
  const words = paragraph.split(" ")
  return (
    <Element>
      {words.map((word, i) => {
        const start = i / words.length // 0, 0.25, 0.5, 0.75
        const end = start + 1 / words.length // 0.25, 0.5, 0.75, 1
        return (
          <Word key={i} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </Element>
  )
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="word">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step
        const end = range[0] + (i + 1) * step
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        )
      })}
    </span>
  )
}

const Char = ({ children, progress, range }) => {
  return (
    <>
      <span className="ghost-letter">{children}</span>
      <m.span
        {...anim(translate)}
        custom={[PRELOADER_DURATION + range[0], PRELOADER_DURATION + range[1]]}
        className="letter"
      >
        {children}
      </m.span>
    </>
  )
}
