import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./home/home.scss"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "./home/components/hero-main"
import Files from "./home/components/files"
import Celebrate from "./home/components/celebration"
import QuickAccess from "./home/components/access"
import Updates from "./home/components/news"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Files/>
    <Celebrate/>
    <QuickAccess/>
    <Updates/>

    
  
  </Layout>
)

export default IndexPage

