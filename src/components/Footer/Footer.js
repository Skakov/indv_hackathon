import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {
   return (
      <div className="main-footer">
            <div className="container">
               <div className="row">
                  
                  <div className="col">
                     <h3>
                        <a href="https://www.lamborghini.com/en-en/">LAMBORGHINI</a>
                     </h3>
                  </div>
                  
                  <div className="col">
                     <h4>Customer Care</h4>
                     <ul className="list-unstyled">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Covid-19</a></li>
                     </ul>
                  </div>
                  
                  <div className="col">
                     <h4>About Us</h4>
                     <ul className="list-unstyled">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Corporate Gifts</a></li>
                        <li><a href="#">Sitemap</a></li>
                     </ul>
                  </div>
                  
                  <div className="col">
                     <h4>Legal</h4>
                     <ul className="list-unstyled">
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Imprint</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        </ul>
                  </div>
               </div>
               <hr />
               <div className="row">
                  <p className="col-sm">
                     <FacebookIcon/>
                     <InstagramIcon/>
                     <PinterestIcon/>
                     <TwitterIcon/>
                     <YouTubeIcon/>
                  </p>
               </div>
            </div>
         </div>
   );
};

export default Footer;