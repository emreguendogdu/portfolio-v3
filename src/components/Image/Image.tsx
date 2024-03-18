"use client"
import "./Image.scss"
import Image from "next/image"

type ImageProps = {
  src: string
  alt: string
  ariaHidden?: boolean
}

export default function MyImage({ src, alt, ariaHidden = false }: ImageProps) {
  const imagePath = src.match(/\/([^/]+)$/)?.[1]
  const blurDataURL = `/images/small-images/${imagePath?.replace(
    /\.webp$/,
    "-small.webp"
  )}`
  return (
    <div className="image-wrapper">
      <Image
        src={src}
        alt={alt}
        aria-hidden={ariaHidden}
        blurDataURL={blurDataURL}
        placeholder="blur"
        loading="eager"
        fill
      />
    </div>
  )
}
