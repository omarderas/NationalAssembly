import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const celebrateImg = "../../../images/BPAN037.jpg";

function Celebrate() {
	return (
        <div className="celebrate-content">
            <div className="row">
              
                <div className="col-sm-6 first">
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/g9qQPKuOp2M?version=3&loop=1&playlist=g9qQPKuOp2M&autoplay=1&mute=1&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
                </div>
                <div className="col-sm-6">
                    <div className="featured-main">
                        <h3>Our 40th Anniversary</h3>
                        <h1>Celebrating Belize's Independence</h1>
                        <p>As Belize commemorates its 40th anniversary year of Independence, we hear from a few of the leaders from 1981 who were in the debates at the House and Senate meetings on an independent Belize including former House Speaker, Honourable Charles B Hyde who presided over the House of Representatives at the time. <br/><br/>Digitized copies of the 1981 documents that led to the Constitution of Belize enacted September 21st 1981.<br/><br/></p>
                        <a href="">View Copies</a>
                    </div>
                </div>
            
            </div>
        </div>

    );
}

export default Celebrate;