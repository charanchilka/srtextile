import './Collection.css';
import CollectionImage from '../../Assets/Images/image001.JPG'

const FeaturedCollection = () => {

    return (
        <div className="main-collection">
            <div className="row no-gutters">
                <div className="col-6">
                    <div className="row no-gutters featured-collection d-flex justify-content-center align-items-center">
                        Featured Collection
                    </div>
                    <div className="row no-gutters customized-goods">
                        Customized Goods
                    </div>
                    <div className="row no-gutters text-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                    </div>
                    <div className="row no-gutters">
                        <button className="view-button">View More</button>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img className="img-style" src={CollectionImage} alt="collection img"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCollection;