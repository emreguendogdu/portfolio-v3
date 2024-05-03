import { motion } from "framer-motion"
import "./triangle.scss"
export default function Triangle(props) {
  const middle = props.middle ? "middle" : props.styles
  return (
    <div className={`triangle-container ${middle}`}>
      <motion.div className="triangle" {...props} />
    </div>
  )
}
