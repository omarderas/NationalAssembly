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
                                    <li>Acts of Parliament - October</li>
                                 
                                </a> 
                                <a href="">
                                
                                    <li>Acts of Parliament - April</li>
                                  
                                </a> 
                                <a href="">
                                  
                                    <li>Acts of Parliament - May</li>
                                   
                                </a> 
                                <a href="">
                                  
                                    <li>Acts of Parliament - July</li>
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
                            <h1>House of Representatives</h1>
                            <ul className="docs">
                               <a href="">
                                    <li>Orders of the Day - February</li>
                                 
                                </a> 
                                <a href="">
                                
                                    <li>Orders of the Day - March</li>
                                  
                                </a> 
                                <a href="">
                                  
                                    <li>Orders of the Day - January</li>
                                   
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
                            <h1>Senate</h1>
                            <ul className="docs">
                                <a href="">
                                    
                                    <li>Orders of the Day - January</li>
                                    
                                </a> 
                                <a href="">
                                    
                                    <li>Orders of the Day - March</li>
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
                            <h1>Draft Bills</h1>
                            <ul className="docs">
                               <a href="">
                                    <li>Docs - January</li>
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