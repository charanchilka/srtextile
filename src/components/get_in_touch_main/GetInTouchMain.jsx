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
                  <div className="row g-0">
                    <div className="col-1">
                    <i class="far fa-user"></i>
                    </div>
                    <div className="col-11">
                    <div class="form-group">
                    <label for="usr">Name</label>
                    <input type="text" class="form-control" id="usr"/>
                  </div>
                    </div>
                  </div>
                 
                </div>
                <div className="col-12">
                <div class="form-group">
                    <label for="usr">Email ID</label>
                    <input type="email" class="form-control" id="usr"/>
                  </div>
                </div>
                <div className="col-12">
                <div class="form-group">
                    <label for="usr">Phone No.</label>
                    <input type="tel" class="form-control" id="usr"/>
                  </div>
                </div>
                <div className="col-12">
                <div class="form-group">
                    <label for="usr">Message:</label>
                    <textarea  rows="2" class="form-control" id="usr"></textarea>
                  </div>
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