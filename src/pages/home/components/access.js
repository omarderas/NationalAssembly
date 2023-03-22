import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const celebrateImg = "../../../images/BPAN037.jpg";

function QuickAccess() {
	return (
        <div className="access-content">
            <div className="row">
              
                <div className="col-sm-7">
                    <div className="access-content">
                        <h1>Quick Access</h1>
                        <h3>How can we help you today?</h3>
                        <div className="tiles">
                            <ul className="tile-blocks first">
                                <a href="">
                                    <li>
                                        <div className="tile-content">
                                            <div className="tile-icon">
                                                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                                            </div>
                                            <h3>Speeches</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                    </a>
                                    <a href="">
                                    <li>
                                        <div className="tile-content">
                                            <div className="tile-icon">
                                            <i class="fa fa-globe" aria-hidden="true"></i>
                                            </div>
                                            <h3>Work Contracts</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                    </a>
                                    <a href="">
                                    <li>
                                        <div className="tile-content">
                                            <div className="tile-icon">
                                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                                            </div>
                                            <h3>Budget Presentation</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                            <ul className="tile-blocks second">
                                <a href="">
                                    <li>
                                        <div className="tile-content">
                                            <div className="tile-icon">
                                            <i class="fa fa-paperclip" aria-hidden="true"></i>
                                            </div>
                                            <h3>Joint Declaration</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                    </a>
                                    <a href="">
                                    <li>
                                        <div className="tile-content">
                                            <div className="tile-icon">
                                            <i class="fa fa-gg" aria-hidden="true"></i>
                                            </div>
                                            <h3>Fiscal Year Estimates</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                    </a>
                                    <a href="">
                                    <li>
                                        <div className="tile-content">
                                            <div className="tile-icon">
                                            <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                                            </div>
                                            <h3>Standing Orders</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    
                </div>
            
            </div>
        </div>

    );
}

export default QuickAccess;