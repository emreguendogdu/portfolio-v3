"use client"

import "./ajans.scss"
import "@/globals.css"
import Nav from "@/components/Nav/nav"
import Footer from "@/components/sections/footer/footer"
import { poppins } from "@/utils/fonts"

function TemplateDemo({ data }) {
  return (
    <a href={data.href || "#"} target="_blank" rel="noreferrer">
      <li>
        <img src={data.src} alt="Template website screenshot" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </li>
    </a>
  )
}

export default function page() {
  return (
    <>
      <Nav />
      <section id="ajans" className={`${poppins.variable}`}>
        <h1></h1>
        <ul>
          <TemplateDemo
            data={{
              title: "Uzay Psikoloji",
              src: "/images/uzaypsikoloji.webp",
              href: "https://uzaypsikolojidemo.netlify.app",
            }}
          />
          <TemplateDemo
            data={{
              title: "Uzay Mimarlık",
              src: "/images/uzaymimarlik.webp",
              href: "https://uzaymimarlikdemo.netlify.app",
            }}
          />
          <TemplateDemo
            data={{
              title: "Hercules GYM",
              src: "/images/herculesgym.webp",
              href: "https://herculesgymdemo.netlify.app",
            }}
          />
        </ul>
        <h2 class="notion-title">
          Özel tasarımlar, e-ticaret ve daha fazla işletme tasarımını{" "}
          <a
            href="https://immediate-basketball-075.notion.site/Agency-Portfolio-eaeb832c60c74d4883e918869347966d"
            target="_blank"
            rel="noreferrer"
            class="notion-link"
          >
            bu linke tıklayarak{" "}
          </a>
          Notion sayfasında görebilirsiniz.
        </h2>
      </section>
      <Footer />
    </>
  )
}
