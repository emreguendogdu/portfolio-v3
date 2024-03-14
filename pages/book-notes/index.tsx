import "./Books.scss"
import { bookContents as books } from "@/../content/bookContents"
import { bookLink, bookImgLink } from "@/utils/links"
import ArrowToRight from "@/components/icons/ArrowToRight"
import { Input } from "@/components/Input/Form"
import Form from "@/components/Input/Form"
import Image from "@/components/Image/Image"
import "@/index.css"
import Nav from "@/components/Nav/Nav"

// TODO: Add document.title -> "Book Notes | Osman G."
// https://github.com/vercel/next.js/tree/deprecated-main/examples/layout-component
// https://stackoverflow.com/questions/52170634/how-to-set-documents-title-per-page

interface Book {
  title: string
  author: string
}

function BookCard({ book: { title, author } }: { book: Book }) {
  return (
    <article className="book-card">
      <div className="book__image">
        <a href={bookLink(title)}>
          <Image
            src={bookImgLink(title)}
            alt={`${title} book cover.`}
            ariaHidden={true}
          />
        </a>
      </div>
      <div className="book__content">
        <h1 className="book__title">{title}</h1>
        <h2 className="book__author">{author}</h2>
      </div>
    </article>
  )
}

export default function BookNotes() {
  return (
    <>
      <Nav />
      <section id="book-notes">
        <div id="book-notes__info">
          <div className="container">
            <div>
              <h1>📚 Book summaries</h1>
              <p>
                If you like books and growth, this is for you. Join the OG
                Letter and I&apos;ll send you on books about psychology,
                science, marketing and sales.
              </p>
            </div>

            <Form buttonValue="Join">
              <Input label="Your favorite email" name="email" />
            </Form>
          </div>
          <div className="container empty" />
        </div>
        <div id="books">
          <ArrowToRight className="arrow-icon" />
          {books.map((book) => {
            return <BookCard key={book.id} book={book} />
          })}
        </div>
      </section>
    </>
  )
}
