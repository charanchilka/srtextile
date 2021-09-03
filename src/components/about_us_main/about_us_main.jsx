import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./about_us_main.css";
import React from "react";
import AboutUsMainImg from "../../Assets/Images/aboutUsMain.svg";

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
                  Globe Textiles (India) Ltd. (acronym: GTIL) has been
                  successfully termed as the STAR Exporter of Fabrics and
                  garments catering to global and domestic markets for the last
                  two decades. GTIL is one of Ahmedabad’s (Gujarat State, India)
                  top ranked and highly reputed companies in the private sector
                  with primary business forays in exporting fabrics.
                </p>
              </div>
              <div className="col-lg-4 col-12 col-md-12 col-sm-12 aboutParaSecond">
                <img src={AboutUsMainImg} alt="AboutUs" />
              </div>
            </div>
          </div>
          <div className="aboutVisionContent">
            <div className="vission">
              <div className="vissionHeading">VISION</div>
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
            </div>
            <div className="mission">
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
            </div>
            <div className="values">
              <div className="vissionHeading">VALUES</div>
              <div className="vissionSubTxt">
                To attain customer satisfaction by delivering nothing but the
                best, by means of utilizing the highest quality of resources and
                world-class systems. At GTIL, with well-defined quality
                objectives in mind to attain customer satisfaction, is at the
                heart of our business policy and strategy.
              </div>
              {/* <div className="vissionTxt">
         At GTIL, with well-defined quality objectives in mind to attain customer satisfaction, is at the heart of our business policy and strategy. Globe is committed to manufacturing, source, supply, export and trade quality textile products and services. We will always endeavor to satisfy our customers’ needs and exceed expectations through win-win relationships and delight them. Our vision is to serve our customers with dedication and offer specialized services with GLOBE quality assurance, walking the ‘extra mile.’

         </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUsMain;
