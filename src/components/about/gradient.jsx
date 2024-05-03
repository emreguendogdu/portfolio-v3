import { motion } from "framer-motion"
import "./gradient.scss"

export function Letter({ children }) {
  return <motion.span className="letter">{children}</motion.span>
}

export function Word({ children }) {
  const letters = children.split("")
  return (
    <span className="word">
      {letters.map((letter, index) => (
        <Letter key={index}>{letter}</Letter>
      ))}
    </span>
  )
}

export default function Paragraph({ children, style }) {
  const text =
    children ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere a earum consectetur, inventore molestias qui tempore voluptas assumenda necessitatibus repellat magnam quisquam labore quidem? Ipsa vero voluptates officia ex impedit!"
  const words = text.split(" ")

  return (
    <p>
      {words.map((word, index) => (
        <Word key={index}>{word}</Word>
      ))}
    </p>
  )
}
