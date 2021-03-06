import './SplashScreen.css';
import SplashIcon from '../../Assets/Images/splash_icon.svg'
import MainIcon from '../main_icon/MainIcon';
import Aos from 'aos';
import {useEffect} from 'react';

function SplashScreen() {
useEffect (() => {
Aos.init({ duration:2000 });
},[]);
    return (
        <div className="main_background">
            <div className="row no-gutters" data-aos="zoom-in">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <img src={SplashIcon} alt="Splash icon" />
                </div>

                <div className="col-12 d-flex justify-content-center align-items-center mt-4">
                    <MainIcon />
                </div>

                {/* <div className="second_para col-12 d-flex justify-content-center align-items-center mt-4">
                    <p>Since 2018</p>
                </div> */}
            </div>


        </div>
    )
}

export default SplashScreen;
