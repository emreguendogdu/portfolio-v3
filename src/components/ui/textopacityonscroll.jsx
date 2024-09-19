import { motion, useTransform } from "framer-motion"

export const Paragraph = ({ children, progress }) => {
  const words = children.split(" ")

  return (
    <p className="flex flex-wrap">
      {words.map((word, i) => {
        const start = i / words.length // 0 / 25 = 0, so the first letter will start first
        const step = 1 / words.length // arbitrary value. but each will take same step.
        const end = start + step

        const opacity = useTransform(progress, [start, end], [0, 1])
        const amount = end - start
        return (
          <Word key={i} range={[start, end]} progress={progress}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

const Word = ({ children, range, progress }) => {
  const characters = children.split("")
  const WORD_START = range[0],
    WORD_END = range[1]
  const WORD_TIME_AMT = WORD_END - WORD_START
  const CHARACTER_TIME_AMT = WORD_TIME_AMT / characters.length // Amount of time each character will be visible

  return (
    <span className="word mr-4 relative">
      {characters.map((character, i) => {
        const CHARACTER_START = WORD_START + CHARACTER_TIME_AMT * i
        const CHARACTER_END = CHARACTER_START + CHARACTER_TIME_AMT
        const opacity = useTransform(
          progress,
          [CHARACTER_START, CHARACTER_END],
          [0, 1]
        )

        return (
          <Character key={i} opacity={opacity} style={{ opacity }}>
            {character}
          </Character>
        )
      })}
    </span>
  )
}

const Character = ({ children, style }) => {
  return (
    <>
      <span className="ghost-character absolute opacity-50">{children}</span>
      <motion.span className="character" style={style}>
        {children}
      </motion.span>
    </>
  )
}
