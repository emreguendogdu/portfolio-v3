"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Paragraph } from "../../../components/textopacityonscroll"

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates at illum animi aspernatur cupiditate iste, molestiae alias cumque natus enim.`
const words = TEXT.split(" ")

export default function page() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"],
  })

  return (
    <>
      <div className="h-screen" />
      <div
        className="text-7xl px-16 flex justify-center items-center max-w-screen-lg flex-wrap"
        ref={targetRef}
      >
        <Paragraph progress={scrollYProgress}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus illum
          perferendis nemo iusto cupiditate fugit expedita impedit recusandae
          perspiciatis. Quis, accusamus atque repudiandae earum quos aut,
          sapiente voluptas iusto nemo nostrum beatae labore laborum minima
          deserunt quam fuga ab officiis!
        </Paragraph>
      </div>
      <div className="h-screen" />
    </>
  )
}
