import "@/globals.css"
import App from "@/App"
import Script from "next/script"
import GoogleAnalytics from "@/components/GoogleAnalytics"

export const metadata = {
  title: "Osman Emre Gundogdu —— Front End Developer",
  description:
    "Osman Emre Gündoğdu is a front end developer and web designer who specializes in creating and designing remarkable digital experiences to help people all around the world.",
  keywords:
    "Osman Emre Gundogdu, Osman Emre Gündoğdu, Osman Gündoğdu, Gündoğdu, Emre Gündoğdu, Osman, Emre, Gundogdu, Gündoğdu, Frontend, Developer, Web, Portfolio, Personal, Website, Book, Notes, Software, Engineer, Front, End, Full, Fullstack, Stack, osmangund, Canother, wyarn, osmangund.github.io",
}

export default function MyApp() {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Osman Emre Gündoğdu",
    jobTitle: "Front End Developer",
    url: "https://www.osmangund.tech",
    sameAs: [
      "https://www.linkedin.com/in/osmangund",
      "https://twitter.com/osmangund",
      "https://github.com/osmangund",
    ],
    description:
      "Osman Emre Gündoğdu is a software engineer who specializes in creating and designing remarkable digital experiences.",
  }

  return (
    <>
      <head>
        <Script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <GoogleAnalytics />
      <body>
        <App />
      </body>
    </>
  )
}
