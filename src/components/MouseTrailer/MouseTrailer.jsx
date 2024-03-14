"use client"

import { useEffect } from "react"
import "./MouseTrailer.scss"

const animateTrailer = (mousetrail, e) => {
  const { clientX, clientY } = e
  if (document.documentElement.scrollWidth > 768) {
    mousetrail.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 4000, fill: "forwards" }
    )
  }
}

export default function MouseTrailer() {
  useEffect(() => {
    const mousetrail = document.getElementById("mouse-trail")

    window.addEventListener("mousemove", (e) => {
      animateTrailer(mousetrail, e)
    })
  }, [])

  return (
    <div id="mouse-trail-wrapper" aria-hidden>
      <div id="mouse-trail" aria-hidden />
    </div>
  )
}
