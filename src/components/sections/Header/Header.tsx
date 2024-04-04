import { m } from "framer-motion"
import "./Header.scss"
import ScrollIcon from "./ScrollIcon"
import { translate } from "./anim"
import { anim } from "@/utils/anims"
PRELOADER_DURATION
import React from "react"
import { PRELOADER_DURATION } from "@/components/PreLoader/anims"
const h1 = "OSMAN EMRE GUNDOGDU"
const p = "Creative front end developer and UI/UX designer based in Turkey."

const letters = (text: string) => {
  return text.split("").map((letter: string, i: number) => (
    <React.Fragment key={i}>
      <span className="ghost-letter">{letter}</span>
      <m.span
        {...anim(translate)}
        custom={[
          PRELOADER_DURATION + i * 0.04,
          PRELOADER_DURATION + (text.length - i) * 0.01,
        ]}
      >
        {letter}
      </m.span>
    </React.Fragment>
  ))
}

export default function Header() {
  return (
    <m.header>
      <div className="container text-container">
        <h1>{letters(h1)}</h1>
        <m.div animate={{ transition: { delayChildren: 3 } }}>
          <p>{letters(p)}</p>
        </m.div>
      </div>
      <div className="container ghost-container" />
      <div className="container ghost-container" />
      <ScrollIcon />
    </m.header>
  )
}
