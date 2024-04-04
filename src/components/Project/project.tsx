import { poppins, space_grotesk } from "@/utils/fonts"
import "./project.scss"

interface ProjectProps {
  project: {
    title: string
    body: string
    tags: string[]
  }
}
export default function Project({
  project: { title, body, tags },
}: ProjectProps) {
  return (
    <section className={`project ${poppins.variable}`}>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
