import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./ProductGallery.css";
import React from "react";
import Pattern from '../../Assets/Images/Pattern.svg'

const allProducts = {
     towels:[
        {
            img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
            heading:"Towel",
            description:"Description of towel",
            weight:"200gms",
            size:"XL"
        },
        {
            img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
            heading:"Towel",
            description:"Description of towel",
            weight:"200gms",
            size:"XL"
        },
        {
            img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
            heading:"Towel",
            description:"Description of towel",
            weight:"200gms",
            size:"XL"
        },
        {
            img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
            heading:"Towel",
            description:"Description of towel",
            weight:"200gms",
            size:"XL"
        },
        {
            img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
            heading:"Towel",
            description:"Description of towel",
            weight:"200gms",
            size:"XL"
        },
        {
            img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
            heading:"Towel",
            description:"Description of towel",
            weight:"200gms",
            size:"XL"
        },
    ],
     napkins:[
      {
          img:"https://srtextilesimages.netlify.app/carousal/22.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      },
      {
          img:"https://srtextilesimages.netlify.app/carousal/22.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      }
    ],
     bathrobes:[
      {
          img:"https://srtextilesimages.netlify.app/promotional/504.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      },
      {
          img:"https://srtextilesimages.netlify.app/promotional/504.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      }
    ],
     customized:[
      {
          img:"https://srtextilesimages.netlify.app/carousal/52.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      },
      {
          img:"https://srtextilesimages.netlify.app/carousal/52.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      }
    ],
     printed:[
      {
          img:"https://srtextilesimages.netlify.app/carousal/46.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      },
      {
          img:"https://srtextilesimages.netlify.app/carousal/46.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      }
    ],
     kitchenNap:[
      {
          img:"https://srtextilesimages.netlify.app/carousal/500.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      },
      {
          img:"https://srtextilesimages.netlify.app/carousal/500.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      }
    ],
     doorMat:[
      {
          img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      },
      {
          img:"https://srtextilesimages.netlify.app/carousal/502.jpg",
          heading:"Towel",
          description:"Description of towel",
          weight:"200gms",
          size:"XL"
      }
    ]
}

class ProductGallery extends React.Component {
  state = {
    navBackground: "bold",
    productTypeArr :[]
  };
  componentDidMount() {
    const type = localStorage.getItem('productType');
    // console.log(allProducts[type],'------------------------------------');
    this.setState({ productTypeArr:allProducts[type] });
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 700 ? "bold" : "bold";
      this.setState({ navBackground: backgroundcolor });
    });
  }
  render() {
     

    return (
      <div>
        <Header background={this.state} />
        <div className="productsMainContainer">
        <div className="patternImag">
                <img src={Pattern} alt="Pattern" />
            </div>
        <div className="topHeadline">
            
      <div className="row no-gutters mx-0">
      {this.state.productTypeArr.map((item,index)=>{
        return (<div className="col-md-6 col-lg-4 col-12 pb-3 px-2" key={index}>

            <div className="topNewsImage"   style={{
                backgroundImage: `url(${item.img})`,
              }}>
              <div className="visibleLayer">
                <p className="mb-2">{item.heading}</p>
                <p className="mb-0 publishDate">{item.description}</p>
              </div>
            </div>
         
        </div>)
    })}
      </div>
    </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductGallery;
