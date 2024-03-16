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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  )
}
