import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./about_us_main.css";
import React from "react";
import AboutUsMainImg from '../../Assets/Images/aboutUsMain.svg'

class AboutUsMain extends React.Component {
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
    return (
      <div>
        <Header background={this.state} />
        <div className="aboutUsMainContainer">
          <div className="aboutPara">
            <div className="row mx-0">
              <div className="col-lg-8 col-12 col-md-12 col-sm-12 aboutParaFirst">
                <div className="aboutHeading">About Us</div>
                <p className="mb-0">
                Mr. Rajesham Chilka started the Company named RY Chilka Textiles in 1992, with bare minimum funds. With his confidence, Willpower and fine knowledge about textiles, he initiated with 4 Power Looms and began manufacturing sheets, expanding further by building new looms and infrastructure.
                </p>
                
                <p className="mb-0">
                  SR Textiles emerged in the year 2018 under the leadership of Rohan Rajesham Chilka. Trained along with his Father, he grew fond into the Business. Rohan began his entrepreneurial journey by assisting his father with an aim to expand the business globally. His passion about business trade & tricks made him explore further into Bed & Bath collection. The Company has maintained a track record of sound professionalism and has always adhered to international standards.
                </p>
              </div>
              <div className="col-lg-4 col-12 col-md-12 col-sm-12 aboutParaSecond">
                <img className="" src={AboutUsMainImg} alt="AboutUs" />
              </div>
            </div>
          </div>
          <div className="aboutVisionContent">
      
            <img className="" src="https://srtextilesimages.netlify.app/carousal/1.jpg" alt="AboutUs" />
           
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUsMain;

/*
<div className="values">
<div className="vissionHeading">VALUES</div>
<div className="vissionSubTxt">
  To attain customer satisfaction by delivering nothing but the
  best, by means of utilizing the highest quality of resources and
  world-class systems. At GTIL, with well-defined quality
  objectives in mind to attain customer satisfaction, is at the
  heart of our business policy and strategy.
</div>
<div className="vissionTxt">
At GTIL, with well-defined quality objectives in mind to attain customer satisfaction, is at the heart of our business policy and strategy. Globe is committed to manufacturing, source, supply, export and trade quality textile products and services. We will always endeavor to satisfy our customers’ needs and exceed expectations through win-win relationships and delight them. Our vision is to serve our customers with dedication and offer specialized services with GLOBE quality assurance, walking the ‘extra mile.’

</div>
</div> */

/* <div className="mission">
<div className="vissionHeading">MISSION</div>
<div className="vissionSubTxt">
  To attain customer satisfaction by delivering nothing but the
  best, by means of utilizing the highest quality of resources and
  world-class systems.
</div>
<div className="vissionTxt">
  At GTIL, with well-defined quality objectives in mind to attain
  customer satisfaction, is at the heart of our business policy
  and strategy. Globe is committed to manufacturing, source,
  supply, export and trade quality textile products and services.
  We will always endeavor to satisfy our customers’ needs and
  exceed expectations through win-win relationships and delight
  them. Our vision is to serve our customers with dedication and
  offer specialized services with GLOBE quality assurance, walking
  the ‘extra mile.’
</div>
</div> */