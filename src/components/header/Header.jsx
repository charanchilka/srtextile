import './Header.css';
import MainIcon from '../main_icon/MainIcon';
import HamburgerIcon from '../../Assets/Images/hamburger_white.svg';

const Header = () => {
    return (
        <div className="nav">
            <div className="row no-gutters header_row">
                <div className="col-12 logo_font_container">
                    <MainIcon className="logo_font"> </MainIcon>
                    <img className="hamberger_icon" src={HamburgerIcon} alt="hamburger icon"/>
                </div>
                <div className="col-auto menu_spacing" id="home">Home</div>
                <div className="col-auto menu_spacing" id="aboutUs">About Us</div>
                <div className="col-auto menu_spacing" id="products">Products</div>
                <div className="col-auto menu_spacing" id="infra">Infrastucture</div>
                <div className="col-auto menu_spacing_contact" id="contact">Contact</div>
            </div>
        </div>
    )
}

export default Header;