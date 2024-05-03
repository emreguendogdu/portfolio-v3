import { Space_Grotesk, Poppins, Manrope } from "next/font/google"
import localFont from "next/font/local"

export const dance = localFont({
  src: "../../public/fonts/Dance.otf",
  variable: "--font-dance",
})

export const PPMonument = localFont({
  src: [
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-BlackItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/PP Monument Extended/PPMonumentExtended-LightItalic.otf",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-ppmonument",
})

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["200", "300", "400", "700"],
})

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--manrope",
  display: "swap",
})
