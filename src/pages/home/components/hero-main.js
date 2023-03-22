import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

function Hero() {
	return (
        <div className="main-content">
            <div className="hero-content">
               <div className="hero-main">
                <h3>Who we are?</h3>
                <h1>The Belize National Assembly</h1>
                <p>The National Assembly of Belize is the Legislature or Parliament of Belize. It consists of two Houses: the Senate (Upper House) and the House of Representatives (Lower House). The thirty-one (31) Members of the House of Representatives are elected in general election under the provisions of the Representation of the People Act.</p>
                <a href="">Read More</a>
               </div>
            </div>
        </div>

    );
}

export default Hero;