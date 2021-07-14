import './GetInTouchSub.css';
import Bathrob from "../../Assets/Images/bath_rob.svg";


const GetInTouchSub = () =>{
    return(
        <div>
            <div className="main-style">
                <div className="row no-gutters">
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <div className="get-in-touch-col">
                        <p className="get-in-touch">Get in touch with us</p>
                        <p className="sub-para">Whole sale products with Best Prices</p>
                        <button className="Connect-with-Us">Connect with Us</button>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <img src={Bathrob} alt="bath rob" height="446px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouchSub;