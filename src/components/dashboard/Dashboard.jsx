import './Dashboard.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AboutUs from '../about_us/AboutUs';
import Collection from '../featured_collection/Collection';
import GetDeal from '../get_a_deal/GetADeal';
import GetInTouchSub from '../get_in_touch/GetInTouchSub';
import ReachUsMap from '../reach_us/ReachUsMap';

const Dashboard = () =>{
    return(
        <div>
            <Header/>
            <Collection/>
            <AboutUs/>
            <GetDeal/>
            <GetInTouchSub/>
            <ReachUsMap/>
            <Footer/>
        </div>
    )
}

export default Dashboard