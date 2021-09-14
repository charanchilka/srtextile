import "./Collection.css";
import Aos from 'aos';
import {useEffect} from 'react';

const FeaturedCollection = () => {
  useEffect (() => {
Aos.init({ duration:1000 ,offset:300});
},[]);

  const closeMenuDesktop = (productType) => {
    let product = {
      type: productType? productType : ''
    };
    const { type } = product;
    localStorage.setItem('productType', type);
  };
  return (
    <div className="main-collection" data-aos="fade-right">
      <div className="row no-gutters mainCollRow">
        <div className="col-12 col-md-12 col-lg-6 col-sm-12 aboutFirstContent">
              <p className="featured-collection">Featured Collection</p>
              <div className="customized-goods-01">IF YOU CAN IMAGINE IT</div>
              <div className="customized-goods-02">WE CAN MANUFACTURE IT</div>
              <div className="view-button-container">
                
                {/*  */}
                <a
                href="/product-gallery"
                onClick={() => closeMenuDesktop('promotional_towels')}
                // onBlur={() => closeMenuDesktop()}
              >
               <button  className="view-button">View More</button>
              </a>
              </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-sm-12 aboutSecondContent">
          <img
            className="img-style"
            src="https://srtextilesimages.netlify.app/promotional/2.jpg"
            alt="collection img"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
