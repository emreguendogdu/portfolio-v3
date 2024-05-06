import { motion } from "framer-motion"
import "./triangle.scss"
export default function Triangle(props) {
  const classes = props.classes ? props.classes : props.styles
  return (
    <div className={`triangle-container ${classes}`}>
      <motion.div className="triangle" {...props} />
    </div>
  )
}
