import './Whatsapp.css';
// import Aos from 'aos';
// import {useEffect} from 'react';
// import Bathrob from "../../Assets/Images/bath_rob.svg";
// import Arrow from '../../Assets/Images/Arrow.svg';

const Whatsapp = () => {
    // useEffect (() => {
    //     Aos.init({ duration:1000 });
    //     },[]);
        
    return ( 
        <div className="whatsapp">
            {/* &text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202. */}
        <a href="https://api.whatsapp.com/send?phone=919404947907" className="float bounce" target="_blank" rel="noopener noreferrer">
<i className="fa fa-whatsapp my-float"></i>
</a>
        </div>
    )
}
export default Whatsapp;
