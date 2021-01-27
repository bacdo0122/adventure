import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="info">
                    <h2 className="info-lable">Join the Adventure newsletter to reveice our best vacation deals</h2>
                    <span className="info-inticafy">You can unsubscribe at any time </span>
                    <form  className="info-subscribe">
                        <input type="text" name="subscribe" id="info-input" placeholder="Your Email"/>
                        <input type="submit" value="Subscribe" id="info-btn"/>
                    </form>

                </div>
                <div className="dropdown">
                   <div className="dropdown-item">
                       <label htmlFor="">About Us</label>
                       <ul className="dropdown-list">
                           <li className="list-item"><a href="#" className="list-link">How it works</a></li>
                           <li className="list-item"><a href="#" className="list-link">Testimonials</a></li>
                           <li className="list-item"><a href="#" className="list-link">Careers</a></li>
                           <li className="list-item"><a href="#" className="list-link">Investors</a></li>
                           <li className="list-item"><a href="#" className="list-link">Terms of Service</a></li>
                       </ul>
                   </div>
                   <div className="dropdown-item">
                       <label htmlFor="">Contact Us</label>
                       <ul className="dropdown-list">
                           <li className="list-item"><a href="#" className="list-link">Contact</a></li>
                           <li className="list-item"><a href="#" className="list-link">Support</a></li>
                           <li className="list-item"><a href="#" className="list-link">Destinations</a></li>
                           <li className="list-item"><a href="#" className="list-link">Sponsorships</a></li>
                          
                       </ul>
                   </div>
                   <div className="dropdown-item">
                       <label htmlFor="">Videos</label>
                       <ul className="dropdown-list">
                           <li className="list-item"><a href="#" className="list-link">Submit Video</a></li>
                           <li className="list-item"><a href="#" className="list-link">Ambassadors</a></li>
                           <li className="list-item"><a href="#" className="list-link">Agency</a></li>
                           <li className="list-item"><a href="#" className="list-link">Influencer</a></li>
                         
                       </ul>
                   </div>
                   <div className="dropdown-item">
                       <label htmlFor="">About Us</label>
                       <ul className="dropdown-list">
                           <li className="list-item"><a href="#" className="list-link">Intargram</a></li>
                           <li className="list-item"><a href="#" className="list-link">Facebook</a></li>
                           <li className="list-item"><a href="#" className="list-link">Youtube</a></li>
                           <li className="list-item"><a href="#" className="list-link">Twitter</a></li>
                    
                       </ul>
                   </div>
                </div>
                <div className="label">
                    <ul className="label-list">
                        <li className="lable-item"><a href="#" className="lable-link lable-branch">TRVL <i className="fab fa-typo3" /></a></li>
                        <li className="lable-item"><a href="#" className="lable-link lable-email">TRVL@2020</a></li>
                        <li className="lable-item has-dropdown">
                            <ul href="#" className="lable-dropdown">
                                <li className="lable-dropdown-item"><a href="#" className="lable-dropdown-link"><i className="fab fa-facebook-f" /></a></li>
                                <li className="lable-dropdown-item"><a href="#" className="lable-dropdown-link"><i class="fab fa-instagram"/></a></li>
                                <li className="lable-dropdown-item"><a href="#" className="lable-dropdown-link"><i className="fab fa-youtube" /></a></li>
                                <li className="lable-dropdown-item"><a href="#" className="lable-dropdown-link"><i className="fab fa-twitter" /></a></li>
                                <li className="lable-dropdown-item"><a href="#" className="lable-dropdown-link"><i className="fab fa-invision" /></a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}
