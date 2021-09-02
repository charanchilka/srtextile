import "./Collection.css";
import CollectionImage from "../../Assets/Images/image001.JPG";

const FeaturedCollection = () => {
  return (
    <div className="main-collection">
      <div className="row no-gutters">
        <div className="col-12 col-md-12 col-lg-6 col-sm-12 d-flex justify-content-center flex-column">
              <p className="featured-collection">Featured Collection</p>
              <div className="customized-goods">Customized Goods</div>
              <div className="text-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                odio in et, lectus sit lorem id integer. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nunc odio in et, lectus sit
                lorem id integer.
              </div>
              <div className="view-button-container">
                <button className="view-button">View More</button>
              </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6 col-sm-12 d-flex align-items-center justify-content-end">
          <img
            className="img-style"
            src={CollectionImage}
            alt="collection img"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
