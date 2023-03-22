import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const actsHeader = "../../../images/belize-logo-circle.png";

function Files() {
	return (
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
                            <ul className="docs">
                               <a href="">
                                    <li>Acts of Parliament 2023</li>
                                 
                                </a> 
                                <a href="">
                                
                                    <li>Acts of Parliament 2022</li>
                                  
                                </a> 
                                <a href="">
                                  
                                    <li>Acts of Parliament 2021</li>
                                   
                                </a> 
                                <a href="">
                                  
                                    <li>Acts of Parliament 2020</li>
                                </a> 
                            </ul>
                        </div>
                        <div className="view-more">
                            <a href="">View All</a>
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
                            <ul className="docs">
                               <a href="">
                                    <li>Orders of the Day 2023</li>
                                 
                                </a> 
                                <a href="">
                                
                                    <li>Orders of the Day 2022</li>
                                  
                                </a> 
                                <a href="">
                                  
                                    <li>Orders of the Day 2021</li>
                                   
                                </a> 
                                <a href="">
                                  
                                    <li>Orders of the Day 2020</li>
                                </a> 
                            </ul>
                        </div>
                        <div className="view-more">
                            <a href="">View All</a>
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
                            <h1>Draft Bills</h1>
                            <ul className="docs">
                               <a href="">
                                    <li>Draft Bills 2023</li>
                                </a> 
                            </ul>
                        </div>
                        <div className="view-more">
                            <a href="">View All</a>
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
                            <h1>Assembly Docs</h1>
                            <ul className="docs">
                               <a href="">
                                    <li>Docs 2023</li>
                                </a> 
                            </ul>
                        </div>
                        <div className="view-more">
                            <a href="">View All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Files;