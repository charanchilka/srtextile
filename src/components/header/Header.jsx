import "./Header.css";
import MainIcon from "../main_icon/MainIcon";
import HamburgerIcon from "../../Assets/Images/hamburger_white.svg";
import { useState } from "react";


const Header = (props) => {
  // console.log(props); //=== 'normal' ?'logo_font':'logo_font-trans';
  let bg = props.background.navBackground;
  let color;
  if (bg === "transparent") {
    color = "#0000003d";
  } else {
    color = "#003445";
  }

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = (productType) => {
    let product = {
      type: productType? productType : ''
    };
    const { type } = product;
    localStorage.setItem('productType', type);
    setNavbarOpen(false);
  };
  const [navbarOpenDesktop, setNavbarOpenDesktop] = useState(false);
  const handleToggleDesktop = () => {
    setNavbarOpenDesktop(!navbarOpenDesktop);
  };
 
  const closeMenuDesktop = (productType) => {
    let product = {
      type: productType? productType : ''
    };
    const { type } = product;
    localStorage.setItem('productType', type);
    setNavbarOpenDesktop(false);
  };

  return (
    <div className="nav" style={{ background: color }}>
      <div className="row no-gutters header_row">
        <div className="col-12 logo_font_container">
          <MainIcon className="logo_font"> </MainIcon>
          <img
            className="hamberger_icon"
            src={HamburgerIcon}
            alt="hamburger icon"
            onClick={handleToggle}
          />

          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <div className="closeMenu" onClick={() => closeMenu()}>
              x
            </div>

            <li className="firstList">
              <a
                className="menuItemsAch"
                href="/"
                onClick={() => closeMenu()}
                onBlur={() => closeMenu()}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="menuItemsAch"
                href="/about-us"
                onClick={() => closeMenu()}
                onBlur={() => closeMenu()}
              >
                About Us
              </a>
            </li>
            <li>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Products
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a
                            href="/product-gallery"
                            onClick={() => closeMenu('towels')}
                            onBlur={() => closeMenu()}
                          >
                            Towels
                          </a>
                        </li>
                        <li>
                          <a
                            href="/product-gallery"
                            onClick={() => closeMenu('napkins')}
                            onBlur={() => closeMenu()}
                          >
                            Napkins
                          </a>
                        </li>
                        <li>
                          <a
                            href="/product-gallery"
                            onClick={() => closeMenu('bathrobes')}
                            onBlur={() => closeMenu()}
                          >
                            Bathrobes
                          </a>
                        </li>
                        <li>
                          <a
                            href="/product-gallery"
                            onClick={() => closeMenu('customized')}
                            onBlur={() => closeMenu()}
                          >
                            Customized Towels
                          </a>
                        </li>
                        <li>
                          <a
                            href="/product-gallery"
                            onClick={() => closeMenu('printed')}
                            onBlur={() => closeMenu()}
                          >
                            Printed Towels
                          </a>
                        </li>
                        <li>
                          <a
                            href="/product-gallery"
                            onClick={() => closeMenu('kitchenNap')}
                            onBlur={() => closeMenu()}
                          >
                            Kitchen Napkins
                          </a>
                        </li>
                        <li>
                          <a
                            href="/product-gallery"
                            onClick={() => closeMenu('doorMat')}
                            onBlur={() => closeMenu()}
                          >
                            Door Mat
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                className="menuItemsAch"
                href="/get-in-touch"
                onClick={() => closeMenu()}
                onBlur={() => closeMenu()}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="menuItemsAch"
                href="/infrastructure"
                onClick={() => closeMenu()}
                onBlur={() => closeMenu()}
              >
                Infrastructure
              </a>
            </li>
          </ul>
        </div>
        <div className="col-auto menu_spacing" id="home">
          <a href="/" className="menuItemsAchDesktop">Home</a>
        </div>
        <div className="col-auto menu_spacing" id="aboutUs">
          <a href="/about-us" className="menuItemsAchDesktop">About Us</a>
        </div>
        <div className="col-auto menu_spacing" id="products" onClick={handleToggleDesktop}>
          Products
        </div>


        <ul className={`menuNavDesktop ${navbarOpenDesktop ? " showMenuDesktop" : ""}`}>
            
            <li>
              <a
                href="/product-gallery" className="menuItemsAchDesktop"
                onClick={() => closeMenuDesktop('towels')}
                onBlur={() => closeMenuDesktop()}
              >
                Towels
              </a>
            </li>
            <li>
              <a
                href="/product-gallery" className="menuItemsAchDesktop"
                onClick={() => closeMenuDesktop('napkins')}
                onBlur={() => closeMenuDesktop()}
              >
                Napkins
              </a>
            </li>
            <li>
              <a
                href="/product-gallery" className="menuItemsAchDesktop"
                onClick={() => closeMenuDesktop('bathrobes')}
                onBlur={() => closeMenuDesktop()}
              >
                Bathrobes
              </a>
            </li>
            <li>
              <a
                href="/product-gallery" className="menuItemsAchDesktop"
                onClick={() => closeMenuDesktop('customized')}
                onBlur={() => closeMenuDesktop()}
              >
                Customized Towels
              </a>
            </li>
            <li>
              <a
                href="/product-gallery" className="menuItemsAchDesktop"
                onClick={() => closeMenuDesktop('printed')}
                onBlur={() => closeMenuDesktop()}
              >
                Printed Towels
              </a>
            </li>
            <li>
              <a
                href="/product-gallery" className="menuItemsAchDesktop"
                onClick={() => closeMenuDesktop('kitchenNap')}
                onBlur={() => closeMenuDesktop()}
              >
                Kitchen Napkins
              </a>
            </li>
            <li>
              <a
                href="/product-gallery" className="menuItemsAchDesktop"
                onClick={() => closeMenuDesktop('doorMat')}
                onBlur={() => closeMenuDesktop()}
              >
                Door Mat
              </a>
            </li>
            </ul>

        <div className="col-auto menu_spacing" id="infra">
          <a href="/infrastructure" className="menuItemsAchDesktop">Infrastucture</a>
        </div>
        <div className="col-auto menu_spacing_contact" id="contact">
          <a href="/Get-In-Touch" className="menuItemsAchDesktop">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
