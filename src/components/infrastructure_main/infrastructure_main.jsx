import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./infrastructure_main.css";
import React from "react";
import InfraMainImg from "../../Assets/Images/infraMainImg.svg";
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
autoplay: true,
autoplaySpeed: 5000,
slidesToShow: 5,
slidesToScroll: 4,
responsive: [
{
breakpoint: 1200,
settings: {
slidesToShow: 4,
slidesToScroll: 3,
infinite: true,

}
},
{
breakpoint: 992,
settings: {
slidesToShow: 4,
slidesToScroll: 2
}
},
{
  breakpoint: 786,
  settings: {
  slidesToShow: 3,
  slidesToScroll: 2
  }
  },
{
breakpoint: 576,
settings: {
slidesToShow: 2,
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
              {/* <iframe
                src="https://www.youtube.com/embed/EKRhXvAoYfU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              <img src="https://srtextilesimages.netlify.app/gallary/2.gif" alt="gif" />
            </div>
          </div>
          <div className="infraImg">
            <img src={InfraMainImg} alt="Infrastructure" />
          </div>

          <div className="infraMachineInfo">
            <div className="infraDetails">
              <div className="row m-0">
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 infraMachineCol">
                  <img src="https://srtextilesimages.netlify.app/infrastructure/602.jpg" alt="ThreadInfo" />
                </div>
                <div className="col-lg-6 col-12 col-md-12 col-sm-12">
                  <div className="infraHeading1 mb-4">Textile Manufacturing</div>
                  <div className="infraImageDetail mb-3">
                  The plant & machinery is one of the best prevailing in the textile industry.
The unit has a very good infrastructure with modern machines needed for manufacturing terry towels like Sectional warping, TFO’s, Winding Machines,Zuki, Soft flow dyeing,  Hi-Tech Rapier looms with latest jacquard & dobby.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="infraMachineInfo1">
            <div className="infraDetails">
              <div className="row m-0 infraMachineRow">
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 infraMachineCol1">
                  <img src="https://srtextilesimages.netlify.app/infrastructure/10.jpg" alt="ThreadInfo" />
                </div>
                <div className="col-lg-6 col-12 col-md-12 col-sm-12">
                  <div className="infraImageDetail mb-3">
                  All preliminary processes such as Bleaching, Dyeing and the preparatory process prior to weaving are done with absolute care, under our direct supervision to ensures that only the better quality materials are passed on to the next stage.
                  </div>
                  <div className="infraImageDetail mb-3">
                  We are at regular contract with power looms, where we produce maximum 10 tones / month in plain & dobby and jacquard. The number of looms will be extending, upon the order quantity and the lead time.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="infraMachineInfo">
            <div className="infraDetails">
              <div className="row m-0">
                <div className="col-lg-6 col-12 col-md-12 col-sm-12 infraMachineCol">
                  <img src="https://srtextilesimages.netlify.app/infrastructure/2.jpg" alt="ThreadInfo" />
                </div>
                <div className="col-lg-6 col-12 col-md-12 col-sm-12">
                  <div className="infraImageDetail mb-3">
                  Cutting, Stitching, Checking, Packing and Stuffing of container is carried out with the best of manpower. Thus ensures our customers the better quality products.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Slider {...settings}>
     <img src="https://srtextilesimages.netlify.app/infrastructure/1.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/2.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/3.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/4.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/88.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/600.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/601.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/602.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/603.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/604.jpg" alt='slider'/>
     <img src="https://srtextilesimages.netlify.app/infrastructure/605.jpg" alt='slider'/>
 </Slider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default InfrastructureMain;
