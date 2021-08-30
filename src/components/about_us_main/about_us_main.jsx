import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./about_us_main.css";
import React from "react";
import AboutUsMainImg from '../../Assets/Images/aboutUsMain.svg'

class AboutUsMain extends React.Component {
  state = {
    navBackground: "transparent",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 500 ? "transparent" : "bold";
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
              <div className="col-8">
                <div className="aboutHeading">About Us</div>
                <p>
                  Globe Textiles (India) Ltd. (acronym: GTIL) has been
                  successfully termed as the STAR Exporter of Fabrics and
                  garments catering to global and domestic markets for the last
                  two decades. GTIL is one of Ahmedabad’s (Gujarat State, India)
                  top ranked and highly reputed companies in the private sector
                  with primary business forays in exporting fabrics.
                </p>
              </div>
              <div className="col-4">
                  <img src={AboutUsMainImg} alt="AboutUs" />
              </div>
            </div>
          </div>
       <div className="vission"></div>
       <div className="mission"></div>
       <div className="values"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUsMain;
