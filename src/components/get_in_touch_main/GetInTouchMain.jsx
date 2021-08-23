import Header from '../header/Header';
import Footer from '../footer/Footer'
  import './GetInTouchMain.css';  
  import React from "react";
  import BackgroundTouch from '../../Assets/Images/getInTouchBack.svg'

  class GetInTouchMain extends React.Component {
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
    return(
      <div>
            <Header background={this.state} />
        <div className="getInTouchMainContainer">
              <img src={BackgroundTouch} alt=""/>
          <div className="contactForm">
            <div className="headerForm">
              Get in <span className="touchCss">Touch</span> with us
            </div>
            <div className="contentForm">
              <div className="row g-0">
                <div className="col-12">
                  
                </div>
                <div className="col-12">
                  
                </div>
                <div className="col-12">
                  
                </div>
                <div className="col-12">
                  
                </div>
              </div>
            </div>
            <div className="submitBtn">
              Submit
            </div>
          </div>
        </div>
            <Footer />
      </div>
    )
    }
  }

  export default GetInTouchMain;