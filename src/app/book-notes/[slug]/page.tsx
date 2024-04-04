import { bookContents } from "@/../content/bookContents"
import Book from "@/components/Book/Book"
import "@/globals.css"
import { kebabCase } from "@/utils/kebabCase"

export async function getStaticPaths() {
  // Generate paths for each book
  const paths = bookContents.map((book) => ({
    params: { slug: kebabCase(book.title) },
  }))

  return {
    paths,
    fallback: false, // This means any paths not returned here will result in a 404 page
  }
}

export default function Page({ params }: any) {
  const book = bookContents.find((b) => kebabCase(b.title) === params.slug)

  return (
    <>
      {book ? (
        <Book book={{ ...book, date: book.date || "" }} />
      ) : (
        <div>Book not found</div>
      )}
    </>
  )
}
