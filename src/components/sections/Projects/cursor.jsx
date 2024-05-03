import { motion } from "framer-motion"
import "./cursor.scss"
import useMousePosition from "@/hooks/useMousePosition"

export default function Cursor({ hovered }) {
  const { x, y } = useMousePosition()
  const size = hovered ? 128 : 0
  return (
    <motion.div
      className="cursor"
      animate={{
        x: `${x - size / 2}px`,
        y: `${y - size / 2}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
      style={{ width: 0, height: 0 }}
    >
      {hovered && <p className="cursor-text">Live</p>}
    </motion.div>
  )
}
