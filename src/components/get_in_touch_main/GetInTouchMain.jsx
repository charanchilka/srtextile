import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./GetInTouchMain.css";
import React from "react";
import BackgroundTouch from "../../Assets/Images/getInTouchBack.svg";

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
    return (
      <div>
        <Header background={this.state} />
        <div className="getInTouchMainContainer">
          <img src={BackgroundTouch} alt="" />
          <div className="contactForm">
            <div className="headerForm">
              Get in <span className="touchCss">Touch</span> with us
            </div>
            <div className="contentForm">
              <div className="row g-0">
                <div className="col-12">
                  <div className="row g-0">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <i className="far fa-user"></i>
                    </div>
                    <div className="col-11">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row g-0">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-11">
                      <div className="form-group">
                        <label>Email ID</label>
                        <input type="email" className="form-control" id="emailid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row g-0">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                    <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="col-11">
                      <div className="form-group">
                        <label>Phone No.</label>
                        <input type="tel" className="form-control" id="phoneno" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row g-0">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                    <i className="far fa-comment-alt"></i>
                    </div>
                    <div className="col-11">
                      <div className="form-group">
                        <label>Message:</label>
                        <textarea
                          rows="2"
                          className="form-control"
                          id="comment"
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
