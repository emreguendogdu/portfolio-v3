import { redirect } from "next/navigation"

export default function Custom404() {
  redirect("/")
  return null // Or a loader, if desired
}
