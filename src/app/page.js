import "@/globals.css"
import App from "@/App"

export const metadata = {
  title: "Osman Gundogdu - Front End Developer",
  description:
    "Osman Emre Gündoğdu is a software engineer who specializes in creating and designing remarkable digital experiences.",
  keywords:
    "Osman Emre Gundogdu, Osman Emre Gündoğdu, Osman Gündoğdu, Gündoğdu, Emre Gündoğdu, Osman, Emre, Gundogdu, Gündoğdu, Frontend, Developer, Web, Portfolio, Personal, Website, Book, Notes, Software, Engineer, Front, End, Full, Fullstack, Stack, osmangund, Canother, wyarn, osmangund.github.io",
}

export default function MyApp() {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Osman Emre Gundogdu",
    url: "https://www.osmangund.tech",
    sameAs: [
      "https://www.linkedin.com/in/osmangund",
      "https://twitter.com/osmangund",
      "https://github.com/osmangund",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <App />
      </main>
    </>
  )
}
