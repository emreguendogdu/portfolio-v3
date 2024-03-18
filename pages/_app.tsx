import "@/globals.css"
import Nav from "@/components/Nav/Nav"
import { AppProps } from "next/app"
import { LazyMotion, domAnimation } from "framer-motion"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Osman Emre Gundogdu</title>
        <meta
          name="description"
          content="Osman Emre Gundogdu | Personal website | Portfolio"
        />
        <meta
          name="keywords"
          content="Osman Emre Gundogdu, Osman, Emre, Gundogdu, Gündoğdu, Frontend, Developer, Web, Portfolio, Personal, Website, Book, Notes, Software, Engineer, Front, End, Full, Fullstack, Stack, osmangund, Canother, wyarn, osmangund.github.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  )
}
