import { GetStaticPaths, GetStaticProps } from "next"
import { kebabCase } from "@/utils/kebabCase"
import { bookContents } from "@/../content/bookContents"
import Book from "@/components/Book/Book"
import "@/globals.css"

export default function BookPage({ book }: { book: any }) {
  return <Book book={book} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bookContents.map((book) => ({
    params: { slug: kebabCase(book.title) },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const book = bookContents.find((book) => kebabCase(book.title) === slug)

  if (!book) {
    return {
      notFound: true,
    }
  }

  return {
    props: { book },
  }
}
