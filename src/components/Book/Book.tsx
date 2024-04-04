import { ShareLink } from "@/components/icons/ShareLink"
import "./Book.scss"
import { poppins } from "@/utils/fonts"

interface BookProps {
  book: {
    title: string
    impressions: string
    actionableSteps: string[]
    quotes: string[]
    date: string
  }
}

export default function Book({
  book: { title, impressions, actionableSteps, quotes, date },
}: BookProps) {
  if (title == undefined) return null
  return (
    <section className={`book-section ${poppins.variable}`}>
      <article className="book">
        <h4 className="book-date">{date}</h4>
        <h1 className="book-title">{title}</h1>
        <p className="book-impressions">{impressions}</p>

        <h3>Actionable steps:</h3>
        <ul className="actionable-steps">
          {actionableSteps?.map((step, index) => (
            <li key={index} className="actionable-step">
              {step}
            </li>
          ))}
        </ul>
        <h3>Some quotes that I liked:</h3>
        <ul className="quotes">
          {quotes?.map((quote, index) => (
            <li key={index} className="quote">
              {`"${quote}"`}
            </li>
          ))}
        </ul>
        <div className="seperator" />
        <div className="share-links">
          <ShareLink className="share-link icon" />
        </div>
      </article>
    </section>
  )
}
