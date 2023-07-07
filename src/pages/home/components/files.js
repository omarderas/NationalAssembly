import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby";

const actsHeader = "../../../images/belize-logo-circle.png";

function Files({data}) {

    return (
        <StaticQuery
          query={graphql`
            query Documents {
              allStrapiAct {
                distinct(field: { Type: SELECT })
                edges {
                  node {
                    PDF {
                      id
                      url
                      name
                    }
                    Description {
                      data {
                        Description
                        id
                      }
                    }
                    Keywords {
                      data {
                        id
                        Keywords
                      }
                    }
                    Type
                    Year
                    Month
                    Title
                    Status
                  }
                }
              }
            }
          `}
          render={data => (

         


        <div className="files-main">
            <div className="row">
                
                <div className="col-sm-3 acts">
                    <div className="overlay-docs"></div>
                    <div className="featured-content">
                        <div className="header-logo">
                        <StaticImage src={actsHeader} quality={60} formats={["auto", "webp", "avif"]} />
                        </div>
                        <div className="header-title">
                            <h1>Acts of Parliament</h1>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="view-more">
                            <a href="/all-documents/?filterType=Acts+of+Parliament&filterYear=&filterMonth=">View All</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 orders">
                    <div className="overlay-docs"></div>
                    <div className="featured-content">
                        <div className="header-logo">
                        <StaticImage src={actsHeader} quality={60} formats={["auto", "webp", "avif"]} />
                        </div>
                        <div className="header-title">
                            <h1>Orders of the Day</h1>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="view-more">
                            <a href="/all-documents/?filterType=Orders+of+the+Day&filterYear=&filterMonth=">View All</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 bills">
                    <div className="overlay-docs"></div>
                    <div className="featured-content">
                        <div className="header-logo">
                        <StaticImage src={actsHeader} quality={60} formats={["auto", "webp", "avif"]} />
                        </div>
                        <div className="header-title">
                            <h1>Draft BIlls</h1>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="view-more">
                            <a href="/all-documents/?filterType=Draft+Bills&filterYear=&filterMonth=">View All</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 proceedings">
                    <div className="overlay-docs"></div>
                    <div className="featured-content">
                        <div className="header-logo">
                        <StaticImage src={actsHeader} quality={60} formats={["auto", "webp", "avif"]} />
                        </div>
                        <div className="header-title">
                            <h1>All Documents</h1>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="view-more">
                            <a href="/all-documents/">View All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )}
    />
    );
    
}

export default Files;