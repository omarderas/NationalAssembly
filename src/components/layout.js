import * as React from "react"
import PropTypes from "prop-types"


import Header from "./header";
import Footer from "./footer";


import { useStaticQuery, graphql } from "gatsby"




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryAll {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <div className="App">
        <Header />
            <div className="content">
                <div>
                  
                    <main>{children}</main>
                </div>
            </div>
            <Footer />
            
        </div>
    </>
);
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
