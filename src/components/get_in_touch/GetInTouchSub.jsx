import "./GetInTouchSub.css";
import hangingNap from "../../Assets/Images/hangingNap.svg";
import Aos from 'aos';
import {useEffect} from 'react';

const GetInTouchSub = () => {
  useEffect (() => {
    Aos.init({ duration:1000,offset:250 });
    },[]);
  return (
    <div className="getInTouchContainer">
      <div className="main-style"  data-aos="fade-down">
        <div className="row no-gutters touchContainer">
          <div className="col-12 col-md-12 col-lg-6 col-sm-12 d-flex flex-column justify-content-center">
            <div className="get-in-touch-col">
              <p className="get-in-touch">Get in touch with us</p>
              {/* <p className="sub-para">Whole sale products with Best Prices</p> */}
              <button className="Connect-with-Us">
               
                  <a href="/Get-In-Touch">Connect with Us</a>
                 
              </button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6 col-sm-12 getInTouchSecondContent">
            <img src={hangingNap} alt="bath rob" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSub;
