import { Html, Head, Main, NextScript } from "next/document"
import { space_grotesk } from "@/utils/fonts"
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={space_grotesk.variable}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
