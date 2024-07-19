"use client"

import "./ajans.scss"
import "@/globals.css"
import Nav from "@/components/Nav/nav"
import Footer from "@/components/sections/footer/footer"
import { poppins } from "@/utils/fonts"
import { useEffect } from "react"

function TemplateDemo({ data }) {
  return (
    <a
      href={data.href || "#"}
      target="_blank"
      rel="noreferrer"
      className="ul-item"
    >
      <li>
        <img src={data.src} alt="Template website screenshot" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </li>
    </a>
  )
}

function DesignDemo({ data }) {
  return (
    <li className="ul-item">
      <img src={data.src} alt="Template design screenshot" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </li>
  )
}
export default function page() {
  return (
    <>
      <Nav />
      <section id="ajans" className={`${poppins.variable}`}>
        <h1>Ajans Portfolyosu</h1>
        <h2 className="section-title">İşletme Siteleri</h2>
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
        <h2 className="section-title">Özel Tasarımlar</h2>
        <ul>
          {Array.from({ length: 6 }).map((item, i) => {
            i += 1
            return (
              <DesignDemo
                data={{
                  src: `/images/design-challenges/dchlng-${i}.webp`,
                }}
              />
            )
          })}
        </ul>

        <h2 className="notion-title">
          E-ticaret ve daha fazla işletme tasarımını{" "}
          <a
            href="https://immediate-basketball-075.notion.site/Agency-Portfolio-eaeb832c60c74d4883e918869347966d"
            target="_blank"
            rel="noreferrer"
            className="notion-link"
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
