import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tobias Bandi</h1>
    <p>
      Tobias Bandi schreibt und spricht viel über menschliches Verhalten,
      Bildung und Erziehung. Er ist Autor von von Artikeln und hält Vorträge auf
      Konferenzen und an Universitäten sowie vor Elterngruppen und Unternehmen.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
