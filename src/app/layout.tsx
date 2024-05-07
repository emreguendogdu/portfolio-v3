import "../globals.css"
import Nav from "@/components/Nav/nav"

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
          <Nav />
          {children}
        </div>
        {/* <script type="module" src="/src/main.jsx"></script> */}
      </body>
    </html>
  )
}
