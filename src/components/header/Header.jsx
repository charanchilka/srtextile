import './Header.css';
import MainIcon from '../main_icon/MainIcon';
import HamburgerIcon from '../../Assets/Images/hamburger_white.svg';

const Header = (props) => {
    // console.log(props); //=== 'normal' ?'logo_font':'logo_font-trans';
    let bg = props.background.navBackground;
    let color;
    if(bg === 'transparent'){
        color = '#0000003d';
    }else{
        color = '#003445';
    }
    
    return (
        <div className="nav" style={{background:color}}>
            <div className="row no-gutters header_row">
                <div className="col-12 logo_font_container">
                    <MainIcon className="logo_font"> </MainIcon>
                    <img className="hamberger_icon" src={HamburgerIcon} alt="hamburger icon"/>
                </div>
                <div className="col-auto menu_spacing" id="home">
                <a href="/">Home</a></div>
                <div className="col-auto menu_spacing" id="aboutUs">
                <a href="/about-us">About Us</a></div>
                <div className="col-auto menu_spacing" id="products">Products</div>
                <div className="col-auto menu_spacing" id="infra">Infrastucture</div>
                <div className="col-auto menu_spacing_contact" id="contact">
                <a href="/Get-In-Touch">Contact</a></div>
            </div>
        </div>
    )
}

export default Header;