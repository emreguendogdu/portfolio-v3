import { motion, useTransform } from "framer-motion"

export default function Pillar({ tl, scrollYProgress, position }) {
  const PILLAR_PARALLAX = useTransform(scrollYProgress, [0, 1], [0, -250])
  const PILLAR_OPACITY = useTransform(
    scrollYProgress,
    [tl.PILLAR_APPEAR_START, tl.PILLAR_APPEAR_END],
    [0, 1]
  )

  const LEFT_PILLAR_X = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const RIGHT_PILLAR_X = useTransform(scrollYProgress, [0, 1], [100, 0])

  const PILLAR_SCALE = useTransform(
    scrollYProgress,
    [tl.start, tl.end],
    [0.6, 1]
  )
  return (
    <motion.img
      src="/images/pillars/pillar1.svg"
      alt="Pillar image"
      className={`pillar ${
        position === "left" ? "pillar-left" : "pillar-right"
      }`}
      style={{
        y: PILLAR_PARALLAX,
        opacity: PILLAR_OPACITY,
        x: position === "left" ? LEFT_PILLAR_X : RIGHT_PILLAR_X,
      }}
    />
  )
}
