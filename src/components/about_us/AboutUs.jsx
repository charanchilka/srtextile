import './AboutUs.css';
import Towels from '../../Assets/Images/towel-pileup.svg';
import Arrow from '../../Assets/Images/Arrow.svg';

const Header = () => {
    return (
        <div className="about-us-main">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 text-right">
                    <div className="about-towel">
                        <img className="image-position" src={Towels} alt="towels" />
                    </div>
                </div>
                <div className="col-lg-6 col-12 col-md-12 col-sm-12">
                    <div className="about-content">
                        <h3>About Us</h3>
                        <div className="row no-gutters">
                            <div className="col-lg-11 col-12 col-md-12 col-sm-12 no-gutters">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                            </div>
                        </div>
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