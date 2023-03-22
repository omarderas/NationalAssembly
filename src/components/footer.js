import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";



import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";
import  FaTwitter  from "../images/FaTwitter";
const MainLogo = "../images/assembly-logo-main.png";
     

function Footer() {
	return (
    <div className="footer">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
                <a class="footer-brand" href="#">  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} /></a>
                <p>Is a bi-cameral legislature, meaning two houses. It is comprised of the House of Representatives and the Senate where laws are made.</p>
                    <ul className="social">
                                <li>
                                    <a href="" target="_blank"><FaFacebookF /></a>
                                    <a href="" target="_blank"><FaInstagram /></a>
                                    <a href="" target="_blank"><FaTwitter /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>
            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Contact Us</h1>
                    <p>
                        TEL:
                    </p>
                    <a href="tel:5018222141">(501) 822-2141</a>
                    <p>
                        EMAIL:
                    </p>
                    <a href="mailto:clerkna@bna.gov.bz">clerkna@bna.gov.bz</a>
                    <p>
                        OFFICE HOURS:
                    </p>
                    <a href="">Mon - Sun, 8:00am to 5:00pm CST</a>
                </div>
            </div>
            <div className="col-sm-4 second">
               <div className="footer-content">
                    <h1>Useful Links</h1>
                    <a href="">The Mace</a><br/>
                    <a href="">Acts</a><br/>
                    <a href="">News</a><br/>
                    <a href="">Meetings</a><br/>
                    <a href="">History of Legislature</a><br/> 

                </div>
            </div>
        </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} National Assembly of Belize. All Rights Reserved. Belize.</p>
        </div>
        <div class="elfsight-app-2ccedc37-a580-4dad-8429-06fe97d320a4"></div> 
	</div>
    

    );
}

export default Footer;

