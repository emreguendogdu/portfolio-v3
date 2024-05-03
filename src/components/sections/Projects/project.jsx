import { PPMonument } from "@/utils/fonts"
import Image from "next/image"

// import getBase64 from "@/utils/getLocalBase64"

export default function Project({ title, tags, href, src, i, setHovered }) {
  // const imageBlurDataURL = await getBase64(`/imagesnew/${i}+1.png`)
  return (
    <div
      className={`project ${PPMonument.variable}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <div className="image-wrapper">
          <div
            className="bg-image"
            style={{
              backgroundImage: `url('/imagesnew/${i + 1}.png')`,
            }}
          />
          <Image src={src} alt={title} width={400} height={500} />
        </div>
        <div className="body">
          <h3 className="title">{title}</h3>
          <div className="tags">
            {tags.map((tag, i) => (
              <span key={`tag__${i}`} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}
