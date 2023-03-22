import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
const img1 = "../../../images/news-1.jpg";
const img2 = "../../../images/news-2.jpeg";
const img3 = "../../../images/news-3.jpg";

function Updates() {
	return (
        <div className="news-main">
            <div className="news-content">
                <div className="header-block">
                <h3>Stay up to Date with what's Happening!</h3>
                <h1>News & Updates</h1>
                </div>
             <div className="row">
                
                <div className="col-sm-4">
                    <div className="content">
                        <div className="news-image">
                          <StaticImage src={img1} quality={60} formats={["auto", "webp", "avif"]} />
                        </div>
                        <h1>Fiscal Year Speech</h1>
                        <div className="sub-header">
                            <h3>February 02, 2022</h3>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content">
                        <div className="news-image">
                        <StaticImage src={img2} quality={60} formats={["auto", "webp", "avif"]} />
                        
                        </div>
                        <h1>Independence Parade</h1>
                        <div className="sub-header">
                            <h3>September 10, 2022</h3>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="content">
                        <div className="news-image">
                        <StaticImage src={img3} quality={60} formats={["auto", "webp", "avif"]} />
                        
                        </div>
                        <h1>Sports Updates</h1>
                        <div className="sub-header">
                            <h3>October 02, 2022</h3>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
             </div>
            </div>
        </div>

    );
}

export default Updates;