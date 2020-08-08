import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Tobias Bandi</h1>
      <p>
        Tobias Bandi schreibt und spricht viel über menschliches Verhalten,
        Bildung und Erziehung. Er ist Autor von von Artikeln und hält Vorträge
        auf Konferenzen und an Universitäten sowie vor Elterngruppen und
        Unternehmen.
      </p>
      <h2>Posts</h2>
      <h3>About things</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Layout>
  )
}
