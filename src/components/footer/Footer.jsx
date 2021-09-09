import './Footer.css';
import EmailIcon from '../../Assets/Images/emailIcon.svg';
import MobileIcon from '../../Assets/Images/Mobile.svg';
import Location from '../../Assets/Images/Location.svg';
import HangerWaterMark from '../../Assets/Images/hanger-watermark.svg';
import InstaIcon from '../../Assets/Images/instagram-icon.svg';
// import DrribleIcon from '../../Assets/Images/dribble-icon.svg';
import TwitterIcon from '../../Assets/Images/twitter-icon.svg';
import YoutubeIcon from '../../Assets/Images/youtube-icon.svg';
import InstaLink from '../../Assets/Images/instaLink.svg';
import TwitterLink from '../../Assets/Images/twitterLink.svg';
import YoutubeLink from '../../Assets/Images/youtubeLink.svg';
// import DrribleLink from '../../Assets/Images/drribleIconLink.svg';

const Header = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="row g-0">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-3 col-sm-12">
                    <h2 className="logo">SR TEXTILES</h2>
                    <div className="row g-0 mt-4 iconRow">
                        <div className="col-auto iconMainCol">
                            <span className="iconCont">
                            <a href="https://www.instagram.com/s.r.textiles/" target="_blank" rel="noopener noreferrer">
                            <img className="socialIcon" src={InstaLink} alt="insta" />
                            <img className="bgIcon" src={InstaIcon} alt="social-media"/> 
                            </a>
                            </span>
                            </div>
                        {/* <div className="col-auto iconMainCol">
                            <span className="iconCont">
                            <img className="socialIcon" src={DrribleLink} alt="insta" />
                            <img className="bgIcon" src={DrribleIcon} alt="social-media"/> 
                            </span>
                            </div> */}
                        <div className="col-auto iconMainCol">
                            <span className="iconCont">
                            <a href="https://www.instagram.com/s.r.textiles/" target="_blank" rel="noopener noreferrer">
                            <img className="socialIcon" src={TwitterLink} alt="insta" />
                            <img className="bgIcon" src={TwitterIcon} alt="social-media"/> 
                            </a>
                            </span>
                            </div>
                        <div className="col-auto iconMainCol">
                            <span className="iconCont">
                            <a href="https://www.instagram.com/s.r.textiles/" target="_blank" rel="noopener noreferrer">
                            <img className="socialIcon" src={YoutubeLink} alt="insta" />
                            <img className="bgIcon" src={YoutubeIcon} alt="social-media"/> 
                            </a>
                            </span>
                            </div>

                    </div>
                    </div>

                    <div className="col-2 responsiveContent">
                        <div>
                            <h3 className="quick-link">Quick Link</h3>
                            <ul>
                                <li>
                                    <a className="quickAch" href="/about-us" >
                                        About Us
                                    </a></li>
                                <li>
                                    <a className="quickAch" href="/infrastructure">
                                        Infrastructure
                                    </a></li>
                                <li>
                                    <a className="quickAch" href="/get-in-touch">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-2 responsiveContent">
                        <div>
                            <h3 className="quick-link">Products</h3>
                            <ul>
                                <li>Dobby Towels</li>
                                <li>Promotional Towels</li>
                                <li>Jaquard Towels</li>
                                <li>Kitchen Towels</li>
                                <li>Bath Mats</li>
                                <li>Hospital Supplies</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12 col-xl-3 col-sm-12">
                        <div>
                            <h3 className="quick-link">Reach Us</h3>
                            <ul className="contactUList">
                            <li><div className="mr-2 contList"><img src={EmailIcon} alt="Email"/></div><span>contact@srtextilesmill.com</span> </li>
                            <li><div className="mr-2 contList"><img src={MobileIcon} alt="mobile"/></div><span>+91 9404947907</span> </li>
                            <li><div className="mr-2 contList"><img src={Location} alt="location"/></div><span>Plot No 19 Adarsh Nagar Solapur</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters copy-right">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-sm-12"> © 2021 SR Textile. All rights reserved</div>
                    <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-sm-12 termsCond">Terms & Conditions | Privacy Policy | Disclaimer</div>
                </div>
            </div>
            <img className="water-mark" src={HangerWaterMark} alt="water-mark"/>
        </div>
    )
}

export default Header;