// pages/_app.js
import "@/globals.css" // Adjust the path to where your globals.css is located
import Nav from "@/components/Nav/Nav"
import { AppProps } from "next/app"
import { LazyMotion, domAnimation } from "framer-motion"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  )
}
