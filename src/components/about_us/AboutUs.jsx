import './AboutUs.css';

import Bathrob from "../../Assets/Images/bath_rob.svg";
import Arrow from '../../Assets/Images/Arrow.svg';

const Header = () => {
    return (
        <div className="about-us-main">
            <div className="aboutWidth">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 collFirstContent">
                 
                    <img src={Bathrob} className="image-position" alt="bath rob" />
                   
                </div>
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 collSecondContent">
                   
                        <p className="aboutHeading">About Us</p>
                            <p className="about-content">Mr. Rajesham Chilka started the Company named RY Chilka Textiles in 1992, with bare minimum funds. With his confidence, Willpower and fine knowledge about textiles, he initiated with 4 Power Looms and began manufacturing sheets, expanding further by building new looms and infrastructure</p>
                        
                        <div className="read-more">
                        <button className="button-style"> <a href="/about-us"> Read More <span> <img src={Arrow} alt="arrow" /></span></a></button>
                        </div>
                   
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;