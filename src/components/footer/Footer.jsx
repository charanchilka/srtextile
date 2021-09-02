import './Footer.css';
import EmailIcon from '../../Assets/Images/emailIcon.svg';
import MobileIcon from '../../Assets/Images/Mobile.svg';
import Location from '../../Assets/Images/Location.svg';
import HangerWaterMark from '../../Assets/Images/hanger-watermark.svg';
import InstaIcon from '../../Assets/Images/instagram-icon.svg';
import DrribleIcon from '../../Assets/Images/dribble-icon.svg';
import TwitterIcon from '../../Assets/Images/twitter-icon.svg';
import YoutubeIcon from '../../Assets/Images/youtube-icon.svg';

const Header = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-3 col-sm-12">
                    <h2 className="logo">SR TEXTILES</h2>
                    <div className="row no-gutters">
                        <div className="col-3"> <img src={InstaIcon} alt="social-media"/> </div>
                        <div className="col-3"> <img src={DrribleIcon} alt="social-media"/> </div>
                        <div className="col-3"> <img src={TwitterIcon} alt="social-media"/> </div>
                        <div className="col-3"> <img src={YoutubeIcon} alt="social-media"/> </div>

                    </div>
                    </div>

                    <div className="col-2 responsiveContent">
                        <div>
                            <h3 className="quick-link">Quick Link</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Infrastructure</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-2 responsiveContent">
                        <div>
                            <h3 className="quick-link">Products</h3>
                            <ul>
                                <li>Towel</li>
                                <li>Napkins</li>
                                <li>Bathrobes</li>
                                <li>Customized Towels</li>
                                <li>Printed Towels</li>
                                <li>Door Mat</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-3 col-sm-12">
                        <div>
                            <h3 className="quick-link">Reach Us</h3>
                            <ul>
                            <li><img className="mr-2" src={EmailIcon} alt="Email"/>contact@srtextilesmills.com</li>
                            <li><img className="mr-2" src={MobileIcon} alt="mobile"/> +91 9168881268</li>
                            <li><img className="mr-2" src={Location} alt="location"/> Plot No. 19 Adarsh Nagar Solapur</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters copy-right">
                    <div className="col-12 col-md-12 col-lg-6 col-sm-12"> © 2021 SR Textile. All rights reserved</div>
                    <div className="col-12 col-md-12 col-lg-6 col-sm-12 text-right">Terms & Conditions | Privacy Policy | Disclaimer</div>
                </div>
            </div>
            <img className="water-mark" src={HangerWaterMark} alt="water-mark"/>
        </div>
    )
}

export default Header;