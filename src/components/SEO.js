import Head from "next/head"

const SEO = ({ title, description, structuredData }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  </Head>
)

export default SEO
