import "./GetADeal.css";
import tellYourNeeds from '../../Assets/Images/tellNeeds.svg'
import priceTag from '../../Assets/Images/priceTag.svg'
import dealWithUs from '../../Assets/Images/dealWithUs.svg'
import Aos from 'aos';
import {useEffect} from 'react';

const GetDeal = () => {
  useEffect (() => {
    Aos.init({ duration:1000,offset:250 });
    },[]);
  return (
    <div className="main-getdeal d-flex justify-content-center align-items-center">
      <div className="three-process">
        <p className="get-deal d-flex justify-content-center align-items-center">
          Get a Deal in 3 steps
        </p>
        <div className="row no-gutters d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-12 col-md-12 col-sm-12 dealFirstContent">
            <div className="cards" data-aos="flip-up">
                <img src={tellYourNeeds} alt="" />
              <p className="cards-header my-4">Tell Us Your Textile Needs</p>
              <p className="cards-content">
                There Are So Many Available Choices For The Same Products.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-12 col-sm-12 dealSecondContent">
            <div className="cards" data-aos-delay="200" data-aos="flip-up">
                 <img src={priceTag} alt="" />
              <p className="cards-header my-4">Get your Textile Quotation</p>
              <p className="cards-content">
              Just drop an inquiry and get instant prices from us.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-12 col-sm-12 dealThirdContent">
            <div className="cards" data-aos-delay="450" data-aos="flip-up">
                 <img src={dealWithUs} alt="" />
              <p className="cards-header my-4">Connect with us & Confirm Deal</p>
              <p className="cards-content">
              Confirm your deal and create your business opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDeal;
