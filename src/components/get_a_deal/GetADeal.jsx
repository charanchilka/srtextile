import "./GetADeal.css";
import tellYourNeeds from '../../Assets/Images/tellNeeds.svg'
import priceTag from '../../Assets/Images/priceTag.svg'
import dealWithUs from '../../Assets/Images/dealWithUs.svg'

const GetDeal = () => {
  return (
    <div className="main-getdeal d-flex justify-content-center align-items-center">
      <div className="three-process">
        <p className="get-deal d-flex justify-content-center align-items-center">
          Get a Deal in 3 steps
        </p>
        <div className="row no-gutters d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-12 col-md-12 col-sm-12">
            <div className="cards">
                <img src={tellYourNeeds} alt="" />
              <p className="cards-header my-4">Tell Us Your Textile Needs</p>
              <p className="cards-content">
                There Are So Many Available Choices For The Same Products.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-12 col-sm-12">
            <div className="cards">
                 <img src={priceTag} alt="" />
              <p className="cards-header my-4">Get your Textile Quotation</p>
              <p className="cards-content">
              Just drop an inquiry and get instant prices from us.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-12 col-sm-12">
            <div className="cards">
                 <img src={dealWithUs} alt="" />
              <p className="cards-header my-4">Connect with us & Confirm Deal</p>
              <p className="cards-content">
              Confirm your deal and create your business oppurtunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDeal;
