import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"



function Meeting() {
	return (
       <div className="sidetabs">
         <div className="main-content-tabs">
            <div className="tab-title">
                <h1>Upcoming Meetings</h1>
            </div>
            <div className="row">
                <div className="tabs-content">
                   <div className="meeting">
                    <h1>Upcoming House Meeting</h1>
                    <span id="date">
                        <p>Feburary 12th, 2023</p>
                        <p>9:00AM to 3:00PM</p>
                        <p>Assembly Building</p>
                    </span>
                   </div>
                </div>
            </div>
            <div className="row">
                <div className="tabs-content">
                   <div className="meeting">
                    <h1>Upcoming Senate Meeting</h1>
                    <span id="date">
                        <p>March 12th, 2023</p>
                        <p>8:00AM to 11:00AM</p>
                        <p>Assembly Building</p>
                    </span>
                   </div>
                </div>
            </div>
            <div className="row">
                <div className="tabs-content">
                   <div className="meeting">
                    <h1>Upcoming Committee Meeting</h1>
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
    );
}

export default Meeting;