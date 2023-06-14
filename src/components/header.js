
import "./../less/header.scss";

import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";
import  FaTwitter  from "../images/FaTwitter";

const MainLogo = "../images/assembly-logo-main.png";



const Header = ({ siteTitle }) => (
  <header>
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
          <iframe width="100%" height="500px" src="https://www.youtube.com/embed/Sp6OcXvosQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        
        </div>

      </div>
  </div>
  <div className="row">
    <div className="col-sm-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">  <StaticImage src="../images/assembly-logo-main.png" quality={60} formats={["auto", "webp", "avif"]} /></a>
    </nav>
    </div>
    <div className="col-sm-6">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#myModal" data-toggle="modal" data-target="#myModal" >
          Latest House Meeting
          <span className="desc">
            View Video
          </span>
          </a>
        </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Parliament
        <span className="desc">
          Useful Info
        </span>
        </a>
        <div id="menu-main" class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="row">
            <div className="col-sm-4">
            <a href="" class="sub-heading">House of Representatives</a>      
              <a class="dropdown-item" href="">House Members</a>
              <a class="dropdown-item" href="">Past Speakers</a>
              <a class="dropdown-item" href="">HOR Standing Orders</a>
              <a class="dropdown-item" href="">Orders of The Day</a>
              <a class="dropdown-item" href="">Draft Bills</a>
              </div>
            <div className="col-sm-4">
            <a href="" class="sub-heading">Senate</a>
             
              <a class="dropdown-item" href="">Members</a>
              <a class="dropdown-item" href="">Past Presidents</a>
              <a class="dropdown-item" href="">Senate Standing Orders</a>
              <a class="dropdown-item" href="">Orders of The Day</a>
          
              </div>
              <div className="col-sm-4">
              <a href="" class="sub-heading">Parlimentary Archives</a>
            
              <a class="dropdown-item" href="">House Verbatim</a>
              <a class="dropdown-item" href="">Senate Verbatim</a>
              <a class="dropdown-item" href="">House Orders</a>
              <a class="dropdown-item" href="">Senate Orders</a>
              <a class="dropdown-item" href="">HR Meetings Minutes</a>
              <a class="dropdown-item" href="">Senate Meetings Minutes</a>
           
              </div>
          </div>
 </div>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="" >
          Events
          <span className="desc">
            Join Us
          </span>
          </a>
      </li>

          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Media
        <span className="desc">
          Visit
        </span>
        </a>
        <div id="menu-main secondary" class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="row">
            <div className="col-sm-4">
          
              <a class="dropdown-item" href="">Live Streaming</a>
              <a class="dropdown-item" href="">Gallery</a>
            
              </div>
        
             
          </div>
 </div>
      </li>
    </ul>
   
  </div>

</nav>
    <div className="contact">
      <a href="" class="primary-button">Contact Us</a>
    </div>
    </div>
    <div className="col-sm-2">

    </div>
  </div>
  <div className="row secondary">
    <ul className="secondary-menu">
      <li>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                National Assembly
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="">How Laws are Made</a>
              <a class="dropdown-item" href="">People in Parliament</a>
              <a class="dropdown-item" href="">History of Legislature</a>
              <a class="dropdown-item" href="">Presiding Officers</a>
              <a class="dropdown-item" href="">The Mace</a>
              <a class="dropdown-item" href="">Visit Parliament</a>
             </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Committees
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="">Standing Committees</a>
              
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Administration
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="">Office of the CLerk</a>
              <a class="dropdown-item" href="">Staff</a>
              
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="">Communique</a>
              <a class="dropdown-item" href="">Acts</a>
              <a class="dropdown-item" href="">Draft Bills</a>
              <a class="dropdown-item" href="">Budgets</a>
              <a class="dropdown-item" href="">Reports</a>
              <a class="dropdown-item" href="">News</a>
              
              </div>
            </li>
          </ul>
        
        </div>

      </nav>
      </li>
      <li id="social-block">
          <ul className="social">
          <li>
            <a href="" target="_blank"><FaFacebookF /></a>
          </li>
          <li>
            <a href=""><FaInstagram /></a>
          </li>
          <li>
            <a href=""><FaTwitter /></a>
          </li>
           </ul>
      </li>
    </ul>

  </div>

  </header>
)

export default Header
