import "./Carousel.css";
import Aos from 'aos';
import {useEffect} from 'react';

const Caraousel = () => {
useEffect (() => {
Aos.init({ duration:2000 });
},[]);

  return (
    <div data-aos="zoom-in" className="carouselMainContainer">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <div class="carousel-caption d-block">
              <h5>Workspace that inspire</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div> */}
            <div
              className="slidingImage"
              style={{
                backgroundImage: `url(https://srtextilesimages.netlify.app/carousal/19.jpg)`,
              }}
            ></div>
          </div>

          <div className="carousel-item">
          {/* <div class="carousel-caption d-block">
              <h5>Workspace that inspire</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div> */}
            <div
              className="slidingImage"
              style={{
                backgroundImage: `url(https://srtextilesimages.netlify.app/carousal/502.jpg)`,
              }}
            ></div>
          </div>

          <div className="carousel-item">
          {/* <div class="carousel-caption d-block">
              <h5>Workspace that inspire</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div> */}
            <div
              className="slidingImage"
              style={{
                backgroundImage: `url(https://srtextilesimages.netlify.app/carousal/22.jpg)`,
              }}
            ></div>
          </div>

          <div className="carousel-item">
          {/* <div class="carousel-caption d-block">
              <h5>Workspace that inspire</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div> */}
            <div
              className="slidingImage"
              style={{
                backgroundImage: `url(https://srtextilesimages.netlify.app/promotional/504.jpg)`,
              }}
            ></div>
          </div>

          <div className="carousel-item">
          {/* <div class="carousel-caption d-block">
              <h5>Workspace that inspire</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div> */}
            <div
              className="slidingImage"
              style={{
                backgroundImage: `url(https://srtextilesimages.netlify.app/carousal/52.jpg)`,
              }}
            ></div>
          </div>

          <div className="carousel-item">
          {/* <div class="carousel-caption d-block">
              <h5>Workspace that inspire</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div> */}
            <div
              className="slidingImage"
              style={{
                backgroundImage: `url(https://srtextilesimages.netlify.app/carousal/46.jpg)`,
              }}
            ></div>
          </div>

          <div className="carousel-item">
          {/* <div class="carousel-caption d-block">
              <h5>Workspace that inspire</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer.
              </p>
            </div> */}
            <div
              className="slidingImage"
              style={{
                backgroundImage: `url(https://srtextilesimages.netlify.app/carousal/500.jpg)`,
              }}
            ></div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Caraousel;
