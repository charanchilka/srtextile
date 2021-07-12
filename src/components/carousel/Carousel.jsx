import './Carousel.css';
// import $ from 'jquery';
import Carousel1 from "../../Assets/Images/carousel1.svg"
import Carousel2 from "../../Assets/Images/carousel2.svg"
import Carousel3 from "../../Assets/Images/carousel3.svg"
import Carousel4 from "../../Assets/Images/carousel4.svg"
import Carousel5 from "../../Assets/Images/carousel5.svg"
import Carousel6 from "../../Assets/Images/carousel6.svg"
import Carousel7 from "../../Assets/Images/carousel7.svg"


const Caraousel = () => {

      
    return (
        <div className="carouselMainContainer">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img className="d-block w-100" src={Carousel1} alt="First slide" /> */}
                        <div className="slidingImage"  style={{backgroundImage: `url(${Carousel1})`}}></div>
                    </div>

                    <div className="carousel-item">
                        {/* <img className="d-block w-100" src={Carousel2} alt="First slide" /> */}
                        <div className="slidingImage"  style={{backgroundImage: `url(${Carousel2})`}}></div>
                    </div>

                    <div className="carousel-item">
                        {/* <img className="d-block w-100" src={Carousel3} alt="First slide" /> */}
                        <div className="slidingImage"  style={{backgroundImage: `url(${Carousel3})`}}></div>
                    </div>
                    <div className="carousel-item">
                        {/* <img className="d-block w-100" src={Carousel3} alt="First slide" /> */}
                        <div className="slidingImage"  style={{backgroundImage: `url(${Carousel4})`}}></div>
                    </div>
                    <div className="carousel-item">
                        {/* <img className="d-block w-100" src={Carousel3} alt="First slide" /> */}
                        <div className="slidingImage"  style={{backgroundImage: `url(${Carousel5})`}}></div>
                    </div>
                    <div className="carousel-item">
                        {/* <img className="d-block w-100" src={Carousel3} alt="First slide" /> */}
                        <div className="slidingImage"  style={{backgroundImage: `url(${Carousel6})`}}></div>
                    </div>
                    <div className="carousel-item">
                        {/* <img className="d-block w-100" src={Carousel3} alt="First slide" /> */}
                        <div className="slidingImage"  style={{backgroundImage: `url(${Carousel7})`}}></div>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div>
    )
}

export default Caraousel;