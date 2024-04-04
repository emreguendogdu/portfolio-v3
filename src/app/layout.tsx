import type { Metadata } from "next"
import "../globals.css"
import Nav from "@/components/Nav/Nav"
import PreLoader from "@/components/PreLoader/PreLoader"

export const metadata: Metadata = {
  title: "Osman Emre Gundogdu",
  description: "Osman Emre Gundogdu | Personal website | Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div id="root">
          <PreLoader />
          <Nav />
          {children}
        </div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  )
}
