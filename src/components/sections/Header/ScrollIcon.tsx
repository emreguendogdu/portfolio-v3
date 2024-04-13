import { PRELOADER_DURATION } from "@/components/PreLoader/anims"
import { ChevronDown } from "../../icons/ChevronDown"
import { m } from "framer-motion"

const delay = PRELOADER_DURATION
const scrollIconVariants = {
  start: {
    y: 0,
  },
  end: {
    y: -10,
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 0.5,
      delay: delay,
      repeatType: "reverse" as const,
    },
  },
}

export default function ScrollIcon() {
  return (
    <m.div
      variants={scrollIconVariants}
      whileInView="end"
      initial="start"
      id="scroll__icon__wrapper"
      viewport={{ once: true, amount: 0.5 }}
    >
      <ChevronDown id="scroll__icon" />
    </m.div>
  )
}
