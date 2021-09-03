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
                            <p className="about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                        
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