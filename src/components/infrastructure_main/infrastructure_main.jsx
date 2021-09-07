import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./infrastructure_main.css";
import React from "react";
import InfraMainImg from "../../Assets/Images/infraMainImg.svg";
import threadInfo from "../../Assets/Images/threadInfo.svg";
import Slider from "react-slick";

class InfrastructureMain extends React.Component {
  state = {
    navBackground: "bold",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 500 ? "bold" : "bold";
      this.setState({ navBackground: backgroundcolor });
    });
  }

  render() {
    var settings = {
    
infinite: true,
speed: 800,
// autoplay: true,
// autoplaySpeed: 4000,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,

}
},
{
breakpoint: 992,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 576,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
    };
    return (
      <div>
        <Header background={this.state} />
        <div className="infraMainContainer">
          <div className="infraVideo">
            <div className="infraHeading">Infrastructure</div>
            <div className="infraInfo">
              To attain customer satisfaction by delivering nothing but the
              best, by means of utilizing the highest quality of resources and
              world-class systems.
            </div>
            <div className="infraGif">
              <iframe
                src="https://www.youtube.com/embed/EKRhXvAoYfU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* <img src="https://thumbs.gfycat.com/BrownWeeIsabellinewheatear-max-1mb.gif" alt="" /> */}
            </div>
          </div>
          <div className="infraImg">
            <img src={InfraMainImg} alt="Infrastructure" />
          </div>

          <div className="infraMachineInfo">
            <div className="infraDetails">
              <div className="row m-0">
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 infraMachineCol">
                  <img src={threadInfo} alt="ThreadInfo" />
                </div>
                <div className="col-lg-6 col-12 col-md-12 col-sm-12">
                  <div className="infraHeading1 mb-4">Heading</div>
                  <div className="infraImageDetail mb-3">
                    To attain customer satisfaction by delivering nothing but
                    the best, by means of utilizing the highest quality of
                    resources and world-class systems.
                  </div>
                  <div className="infraImageDetail mb-3">
                    To attain customer satisfaction by delivering nothing but
                    the best, by means of utilizing the highest quality of
                    resources and world-class systems.
                  </div>
                  <div className="infraImageDetail">
                    To attain customer satisfaction by delivering nothing but
                    the best, by means of utilizing the highest quality of
                    resources and world-class systems.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Slider {...settings}>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190720/gallery/preview/02_o_car.jpg"/></div>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190715/gallery/preview/03_r_car.jpg"/></div>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/04_g_car.jpg"/></div>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/01_b_car.jpg"/></div>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190720/gallery/preview/02_o_car.jpg"/></div>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190715/gallery/preview/03_r_car.jpg"/></div>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/04_g_car.jpg"/></div>
     <div><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1565190714/gallery/preview/01_b_car.jpg"/></div>
 </Slider>
          <div className="infraMachineInfo1">
            <div className="infraDetails">
              <div className="row m-0 infraMachineRow">
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 infraMachineCol1">
                  <img src={threadInfo} alt="ThreadInfo" />
                </div>
                <div className="col-lg-6 col-12 col-md-12 col-sm-12">
                  <div className="infraHeading1 mb-4">Heading</div>
                  <div className="infraImageDetail mb-3">
                    To attain customer satisfaction by delivering nothing but
                    the best, by means of utilizing the highest quality of
                    resources and world-class systems.
                  </div>
                  <div className="infraImageDetail mb-3">
                    To attain customer satisfaction by delivering nothing but
                    the best, by means of utilizing the highest quality of
                    resources and world-class systems.
                  </div>
                  <div className="infraImageDetail">
                    To attain customer satisfaction by delivering nothing but
                    the best, by means of utilizing the highest quality of
                    resources and world-class systems.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default InfrastructureMain;
