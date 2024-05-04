import { motion } from "framer-motion"

export const anim = (variants, custom = null) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  }
}

export const TEXT_TO_LETTER = (text, initial, animate) => {
  const TEXT_VARIANTS = {
    initial: initial,
    enter: animate,
  }

  return text.split("").map((letter, index) => {
    const animProps = anim(TEXT_VARIANTS, index)
    return (
      <motion.span key={index} {...animProps} custom={index} className="letter">
        {letter}
      </motion.span>
    )
  })
}

export const textToLetter = (text, variants) => {
  return text.split(" ").map((word, i) => {
    return (
      <span key={i} className="word">
        {word.split("").map((char, j) => {
          return (
            <motion.span
              key={j}
              {...anim(variants, j)}
              custom={i + j / 10}
              className="letter"
            >
              {char}
            </motion.span>
          )
        })}
        &nbsp;
      </span>
    )
  })
}
