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

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const navigation = [
    { link: "/", text: "Home" },
    { link: "/about-us", text: "About Us" },
    { link: "/get-in-touch", text: "Contact" },
    { link: "/infrastructure", text: "Infrastructure" },
  ];

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
              <a className="menuItemsAch"
                href="/"
                onClick={() => closeMenu()}
                onBlur={() => closeMenu()}
              >
                Home
              </a>
              <a className="menuItemsAch"
                href="/about-us"
                onClick={() => closeMenu()}
                onBlur={() => closeMenu()}
              >
                About Us
              </a>

              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn"
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
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <ul>
                        <li>
                          <a
                            href="/"
                            onClick={() => closeMenu()}
                            onBlur={() => closeMenu()}
                          >
                            Towels
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            onClick={() => closeMenu()}
                            onBlur={() => closeMenu()}
                          >
                            Napkins
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            onClick={() => closeMenu()}
                            onBlur={() => closeMenu()}
                          >
                            Bathrobes
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            onClick={() => closeMenu()}
                            onBlur={() => closeMenu()}
                          >
                            Customized Towels
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            onClick={() => closeMenu()}
                            onBlur={() => closeMenu()}
                          >
                            Printed Towels
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            onClick={() => closeMenu()}
                            onBlur={() => closeMenu()}
                          >
                            Kitchen Napkins
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            onClick={() => closeMenu()}
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

              <a className="menuItemsAch"
                href="/get-in-touch"
                onClick={() => closeMenu()}
                onBlur={() => closeMenu()}
              >
                Contact
              </a>
              <a className="menuItemsAch"
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
          <a href="/">Home</a>
        </div>
        <div className="col-auto menu_spacing" id="aboutUs">
          <a href="/about-us">About Us</a>
        </div>
        <div className="col-auto menu_spacing" id="products">
          Products
        </div>
        <div className="col-auto menu_spacing" id="infra">
          <a href="/infrastructure">Infrastucture</a>
        </div>
        <div className="col-auto menu_spacing_contact" id="contact">
          <a href="/Get-In-Touch">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
