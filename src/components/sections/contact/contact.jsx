import { PPMonument } from "@/utils/fonts"
import "./contact.scss"
import Pillar1 from "@/components/ui/pillar1"
import { useScroll, useTransform, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { anim } from "@/utils/anims"
import Pillar from "./pillar"
import Link from "next/link"
import Footer from "../footer/footer"
import Triangle from "@/components/ui/triangle/triangle"

const tl = {
  start: 0,
  PILLAR_APPEAR_START: 0.2,
  PILLAR_APPEAR_END: 0.6,
  BIGTEXT_PARALLAX_END: 0.6,
  SMALLTEXT_OPACITY_START: 0.7,
  end: 0.8,
}

let TITLE_TEXT = "Contact"

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })
  const [randoms, setRandoms] = useState(Array(TITLE_TEXT.length).fill(0))

  useEffect(() => {
    const randoms = []
    for (let i = 0; i < TITLE_TEXT.length; i++) {
      randoms.push(Math.floor(Math.random() * -175) - 75)
    }
    setRandoms(randoms)
  }, [])

  const SMALLTEXT_OPACITY = useTransform(
    scrollYProgress,
    [tl.SMALLTEXT_OPACITY_START, tl.end],
    [0, 1]
  )

  const TRIANGLE_OPACITY = useTransform(
    scrollYProgress,
    [tl.SMALLTEXT_OPACITY_START, tl.end],
    [0.1, 0.4]
  )

  const BIGTEXT_OPACITY = useTransform(
    scrollYProgress,
    [tl.start, tl.end],
    [0, 1]
  )

  return (
    <>
      <section
        id="contact-section"
        className={`${PPMonument.variable}`}
        ref={containerRef}
      >
        <div className="sticky">
          <div className="pillars">
            <Pillar scrollYProgress={scrollYProgress} tl={tl} position="left" />
            <Pillar
              scrollYProgress={scrollYProgress}
              tl={tl}
              position="right"
            />
          </div>
          <Triangle style={{ opacity: TRIANGLE_OPACITY }} classes="middle" />
          <div className="contact-text">
            <h1>
              <a href="mailto:hello@osmangund.tech">
                {TITLE_TEXT.split("").map((letter, i) => {
                  // const random = Math.floor(Math.random() * -175) - 75
                  const PARALLAX_TEXT = useTransform(
                    scrollYProgress,
                    [tl.start, tl.BIGTEXT_PARALLAX_END],
                    [randoms[i], 0]
                  )
                  return (
                    <motion.span
                      style={{
                        top: PARALLAX_TEXT,
                        opacity: BIGTEXT_OPACITY,
                      }}
                      key={`cl_${i}`}
                    >
                      {letter}
                    </motion.span>
                  )
                })}
              </a>
            </h1>
            {/* <motion.p style={{ opacity: SMALLTEXT_OPACITY }}>
              Click on contact, write down your ideas and let&apos;s create a
              masterpiece together.
            </motion.p> */}
            <ul>
              <li>
                <Link
                  href="
                mailto:hello@osmangund.tech?subject=We need to talk &body=Hi Osman, I found your website and I have an idea on..."
                >
                  email
                </Link>
              </li>
              <li>
                <Link
                  href="
                https://www.linkedin.com/in/osmangund/"
                >
                  linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="
                https://www.github.com/osmangund/"
                >
                  github
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="contact"></div>
      </section>
      <Footer />
    </>
  )
}
