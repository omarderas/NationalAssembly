import * as React from "react"
import "./meetings.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Meeting from "./components/meeting"



const SideTabs = () => (
  <Layout>
    <Seo title="Belize National Assembly" />
    <Meeting/>
  </Layout>
)

export default SideTabs;
