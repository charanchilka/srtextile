import "./Collection.css";

const FeaturedCollection = () => {
  return (
    <div className="main-collection">
      <div className="row no-gutters">
        <div className="col-12 col-md-12 col-lg-6 col-sm-12 aboutFirstContent">
              <p className="featured-collection">Featured Collection</p>
              <div className="customized-goods-01">IF YOU CAN IMAGINE IT</div>
              <div className="customized-goods-02">WE CAN MANUFACTURE IT</div>
              <div className="view-button-container">
                <button className="view-button">View More</button>
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
