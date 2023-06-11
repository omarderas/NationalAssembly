import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Hero() {
	return (

        <StaticQuery
        query={graphql`
        query Hero {
            allStrapiMessage { 
              edges {
                node {
                  id
                  Title
                }
              }
            }
        }
        `}
                
        render={data => (
        <div className="main-content">
            <div className="hero-content">
               <div className="hero-main">
                <h3>Who we are?</h3>
                <h1>The Belize National Assembly</h1>
                <p>The National Assembly of Belize is the Legislature or Parliament of Belize. It consists of two Houses: the Senate (Upper House) and the House of Representatives (Lower House).</p>
                <a href="">Read More</a>
               </div>
            </div>
            <div className="hero-content-main">
                <div className="row">
                    <div className="col-sm-12">
                    {data.allStrapiMessage.edges.map(({ node: titleText }) => (
                        <h1>{titleText.Title}</h1>
                    ))}
                        <iframe src="https://www.youtube.com/embed/hgX2ix34Eb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                 
                </div>
                <div className="row meetings">
                    <div className="col-sm-12">
                    <div className="meeting first">
                    <h3>Upcoming House Meeting</h3>
                    <span id="date">
                        <p>Feburary 12th, 2023</p>
                        <p>9:00AM to 3:00PM</p>
                        <p>Assembly Building</p>
                    </span>
                   </div>
                    <div className="meeting second">
                    <h3>Upcoming Senate Meeting</h3>
                    <span id="date">
                        <p>March 12th, 2023</p>
                        <p>8:00AM to 11:00AM</p>
                        <p>Assembly Building</p>
                    </span>
                   </div>
                   <div className="meeting third">
                    <h3>Upcoming Committee Meeting</h3>
                    <span id="date">
                        <p>May 12th, 2023</p>
                        <p>1:00AM to 3:00PM</p>
                        <p>Assembly Building</p>
                    </span>
                   </div>
                    </div>
                 
                </div>
            </div>
        </div>

           )}
        />

    );
}

export default Hero;