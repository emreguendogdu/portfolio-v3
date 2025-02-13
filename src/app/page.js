import "@/globals.css"
import App from "@/App"
import Script from "next/script"
import GoogleAnalytics from "@/components/GoogleAnalytics"

export const metadata = {
  title: "Emre Gundogdu —— Front End Developer",
  description:
    "Emre Gundogdu is a front end developer and web designer who specializes in creating and designing remarkable digital experiences to help people all around the world.",
  keywords:
    "Osman Emre Gundogdu, Osman Emre Gündoğdu, Osman Gündoğdu, Gündoğdu, Emre Gündoğdu, Emre Gundogdu, Osman, Emre, Gundogdu, Gündoğdu, Frontend, Developer, Web, Portfolio, Personal, Website, Book, Notes, Software, Engineer, Front, End, Full, Fullstack, Stack, osmangund, emregnd, emregund, Canother, wyarn, osmangund.github.io",
}

export default function MyApp() {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Emre Gundogdu",
    jobTitle: "Front End Developer",
    url: "https://www.emregnd.com",
    sameAs: [
      "https://www.linkedin.com/in/emregnd",
      "https://github.com/emreguendogdu",
    ],
    description:
      "Emre Gundogdu is a software engineer who specializes in creating and designing remarkable digital experiences.",
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
