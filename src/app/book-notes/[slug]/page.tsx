import { GetStaticPaths, GetStaticProps } from "next"
import { kebabCase } from "@/utils/kebabCase"
import { bookContents } from "@/../content/bookContents"
import Book from "@/components/Book/Book"
import "@/globals.css"

export default function BookPage({ book }: { book: any }) {
  return <Book book={book} />
}

export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json())

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}
