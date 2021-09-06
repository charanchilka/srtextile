import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./GetInTouchMain.css";
import React from "react";

class GetInTouchMain extends React.Component {
  state = {
    navBackground: "transparent",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 700 ? "transparent" : "bold";
      this.setState({ navBackground: backgroundcolor });
    });
  }

  render() {
    return (
      <div>
        <Header background={this.state} />
        <div className="getInTouchMainContainer">
          <img src="https://srtextilesimages.netlify.app/gallary/1.jpg" alt="" />
          <div className="contactForm">
            <div className="headerForm">
              Get in <span className="touchCss">Touch</span> with us
            </div>
            <div className="contentForm">
              <div className="row g-0">
                <div className="col-12 mb-2">
                  <div className="row g-0">
                    <div className="col-1 p-0 d-flex justify-content-center align-items-center">
                      <i className="far fa-user"></i>
                    </div>
                    <div className="col-11 p-0">
                      <div className="form-group">
                  
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-2">
                  <div className="row g-0">
                    <div className="col-1 p-0 d-flex justify-content-center align-items-center">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-11 p-0">
                      <div className="form-group">
                      
                        <input type="email" className="form-control" id="emailid" placeholder="Enter Email ID " />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-2">
                  <div className="row g-0">
                    <div className="col-1 p-0 d-flex justify-content-center align-items-center">
                    <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="col-11 p-0">
                      <div className="form-group">
                        
                        <input type="tel" className="form-control" id="phoneno" placeholder="Enter Phone No." />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-2">
                  <div className="row g-0">
                    <div className="col-1 p-0 d-flex justify-content-center align-items-center">
                    <i className="far fa-comment-alt"></i>
                    </div>
                    <div className="col-11 p-0">
                      <div className="form-group">
                      
                        <textarea
                          rows="2"
                          className="form-control"
                          id="comment"
                          placeholder="Enter message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="submitBtn">Submit</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GetInTouchMain;
