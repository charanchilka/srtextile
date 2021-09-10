import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./ProductGallery.css";
import React from "react";
import Pattern from '../../Assets/Images/Pattern.svg'
import Pattern1 from '../../Assets/Images/Pattern1.jpg'

const allProducts = {
  promotional_towels: [
    {
      img: "https://srtextilesimages.netlify.app/promotional/2.jpg",
      heading: "Promotional Towels",
      description: `These towels are generally for promotion purpose where customized designs are woven with jacquard patterns or jacquard logo. Any color combinations can be used as per the requirements.\n
          We also have a good setup of computerized embroidery machines, were complex designs can be stitched into the towels of any sizes and any number of strands which can be used in the needle \n Standard sizes -  30x30 cm, 40x60 cm, 70x140 cm, 100 x 200 cm  OR  any other sizes as per requirement `,
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/promotional/5.jpg",
      heading: "Promotional Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/promotional/7.jpg",
      heading: "Promotional Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/promotional/82.jpg",
      heading: "Promotional Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/promotional/83.jpg",
      heading: "Promotional Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    }
  ],
  dobby_towels: [
    {
      img: "https://srtextilesimages.netlify.app/bobby_bath_towels/1.jpg",
      heading: "Dobby Towels",
      description: `These are made from 100% cotton combed or carded Ring spun yarn.  With 1- ply and 2- ply count they may come with different variations of dobby border or without border as per client requirements. 
            Standard sizes - 30x30 cm, 40x60 cm, 70x140 cm, 100 x 200 cm  OR  any other sizes as per requirement`,
      weight: "200gms",
      size: "30x30 cm, 40x60 cm, 70x140 cm, 100 x 200 cm"
    },
    {
      img: "https://srtextilesimages.netlify.app/bobby_bath_towels/2.jpg",
      heading: "Dobby Towels",
      description: ``,
      weight: "200gms",
      size: "30x30 cm, 40x60 cm, 70x140 cm, 100 x 200 cm"
    },
    {
      img: "https://srtextilesimages.netlify.app/bobby_bath_towels/3.jpg",
      heading: "Dobby Towels",
      description: ``,
      weight: "200gms",
      size: "30x30 cm, 40x60 cm, 70x140 cm, 100 x 200 cm"
    }
  ],
  jaquard_towels: [
    {
      img: "https://srtextilesimages.netlify.app/jaquard_towels/30.jpg",
      heading: "Designer Jaquard Towels",
      description: `These are the towels with the attractive jacquard designs at the border, yet light-weight towels which gives you a soft and delicate touch\nStandard sizes – 70x140cm OR any other sizes as per requirement`,
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/jaquard_towels/35.jpg",
      heading: "Designer Jaquard Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/jaquard_towels/41.jpg",
      heading: "Designer Jaquard Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/jaquard_towels/46.jpg",
      heading: "Designer Jaquard Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    }
  ],
  kitchen_towels: [
    {
      img: "https://srtextilesimages.netlify.app/kitchen_towel/52.jpg",
      heading: "Kitchen Towels",
      description: `This quality of fabric is used in house hold kitchens which has a Gentle Weave.  These cleaning clothes are an extra absorbent and perfect for drying dishes and wiping up spills, but stylish enough to simply display in your kitchen and can be made in any GSM depending upon quantity required. These towels can be customized in colors design, logo, Packing etc as per client’s requirements.\nStandard sizes - 30x50 cm, 40x60 cm OR any other sizes as per the requirementsṣ`,
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/kitchen_towel/55.jpg",
      heading: "Kitchen Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/kitchen_towel/60.jpg",
      heading: "Kitchen Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    }
  ],
  bath_mats: [
    {
      img: "https://srtextilesimages.netlify.app/bath_maths/49.jpg",
      heading: "Bath Mats",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/bath_maths/70.jpg",
      heading: "Bath Mats",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/bath_maths/73.jpg",
      heading: "Bath Mats",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/bath_maths/74.jpg",
      heading: "Bath Mats",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/bath_maths/76.jpg",
      heading: "Bath Mats",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
  ],
  hotel_linens: [
    {
      img: "https://srtextilesimages.netlify.app/hotel_bath_linens/1.jpg",
      heading: "Hotel Linens",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hotel_bath_linens/2.jpg",
      heading: "Hotel Linens",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hotel_bath_linens/9.jpg",
      heading: "Hotel Linens",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hotel_bath_linens/64.jpg",
      heading: "Bath Robes",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hotel_bath_linens/65.jpg",
      heading: "Bath Robes",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hotel_bath_linens/66.jpg",
      heading: "Bath Robes",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
  ],
  beach_towels: [
    {
      img: "https://srtextilesimages.netlify.app/beach_towel/78.jpg",
      heading: "Beach Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/beach_towel/79.jpg",
      heading: "Beach Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/beach_towel/80.jpg",
      heading: "Beach Towels",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    }
  ],
  hospital_supplies: [
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/1.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/2.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/3.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/4.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/5.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/6.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/7.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/8.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
    {
      img: "https://srtextilesimages.netlify.app/hospital_linens/9.jpg",
      heading: "Hospital Linens and Uniforms",
      description: "Description of towel",
      weight: "200gms",
      size: "XL"
    },
  ],
}

class ProductGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navBackground: "bold",
            productTypeArr: [],
            previewOpen: false,
            modalImg: '',
        };
    }
  componentDidMount() {
    const type = localStorage.getItem("productType");
    // console.log(allProducts[type],'------------------------------------');
    this.setState({ productTypeArr: allProducts[type] });
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 700 ? "bold" : "bold";
      this.setState({ navBackground: backgroundcolor });
    });
  }

  previewImg = (img) => {
    this.setState({ previewOpen: true,modalImg: img });
  };

    closeMenu = () => {
      this.setState({previewOpen: false})
    };

  render() {
     

    return (
      <div>
        <Header background={this.state} />
        <div className="productsMainContainer">
        <div className="patternImag">
                <img src={Pattern} alt="Pattern" />
            </div>
        <div className="patternImag1">
                <img src={Pattern1} alt="Pattern" />
            </div>
        <div className="topHeadline">
            <h2 className="productHeading">Collection</h2>
      <div className="row no-gutters mx-0">
      {this.state.productTypeArr.map((item,index)=>{
        return (<div className="col-md-6 col-lg-4 col-12 pb-3 px-2" key={index}>

            <div className="topNewsImage"   style={{
                backgroundImage: `url(${item.img})`,
              }}>
              <div className="visibleLayer" onClick={() => this.previewImg(item.img)}>
                <p className="mb-2 heading">{item.heading}</p>
                {/* <p className="mb-0 description">{item.description}</p> */}
                {/* <p className="mb-0 size">Size</p> */}
                {/* <p className="mb-0 weight">Weight</p> */}
              </div>
            </div>
         
        </div>)
    })}
      </div>
    </div>
        </div>
        <Footer />
        <div className={this.state.previewOpen?'modalPreview':'d-none'}>
<div className="closeModel" onClick={() => this.closeMenu()}>X</div>
            <img src={this.state.modalImg} alt="preview" />
        </div>
      </div>
    );
  }
}

export default ProductGallery;
