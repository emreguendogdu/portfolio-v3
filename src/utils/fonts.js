import { Poppins } from "next/font/google"
import localFont from "next/font/local"

export const dance = localFont({
  src: "../../public/fonts/Dance.otf",
  variable: "--font-dance",
  preload: false,
})

export const PPMonument = localFont({
  src: [
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-Light.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-ppmonument",
  preload: false,
})

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  preload: false,
})
