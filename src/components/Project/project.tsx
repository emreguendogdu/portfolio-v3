import { poppins } from "@/utils/fonts"
import "./project.scss"
import { PROJECT_IMG_LINK } from "@/utils/links"
import Image from "@/components/Image/Image"

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
  const src = PROJECT_IMG_LINK(title)
  return (
    <section className={`project ${poppins.variable}`}>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        <h2>Used Technologies</h2>
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="image-wrapper">
        <Image
          src={src}
          alt={`${title} project screenshot.`}
          ariaHidden={true}
        />
      </div>
    </section>
  )
}
