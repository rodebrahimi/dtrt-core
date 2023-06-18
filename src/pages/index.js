import * as React from "react"
/** 
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
**/

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "US Made Building Products",
    url: "https://usmadesupply.com",
    description:
      "A unique new way to find specialty US-made building products and related tools. US-made products often stand out for their quality and durability, offering value for both contractors and homeowners.",
  },
  {
    text: "Title 24 Roof",
    url: "https://title24roof.com",
    description:
      "Title 24 mandates energy-smart building in California, pushing for 'cool roofs' that bounce back sunlight. White reflective roof coatings enable this energy-saving action.",
  },
  {
    text: "Deck Waterproofing",
    url: "https://deckflex.com",
    description:
      "TetraCrete-based deck waterproofing systems and related products made in the USA.",
  },
]

const moreLinks = [
  { text: "Get Featured", url: "#" },
/**
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
**/
]

const utmParameters = `?utm_source=dtrt&utm_medium=featured-page&utm_campaign=test`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
      <b>Currently Featured Teams and Companies:</b>
      </h1>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
