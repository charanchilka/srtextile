import React from "react";
import "./Dashboard.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AboutUs from "../about_us/AboutUs";
import Collection from "../featured_collection/Collection";
import GetDeal from "../get_a_deal/GetADeal";
import GetInTouchSub from "../get_in_touch/GetInTouchSub";
import ReachUsMap from "../reach_us/ReachUsMap";
import Caraousel from "../carousel/Carousel";
import SplashScreen from '../splash_screen/SplashScreen';
import Whatsaspp from '../whatsapp/Whatsapp';

class Dashboard extends React.Component {

  state = {
    navBackground: "transparent",
    splash_is_enable: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 500 ? "transparent" : "bold";
      this.setState({ navBackground: backgroundcolor });
    });
    setTimeout(() => {
      this.setState({splash_is_enable:false})
    }, 2000);
  }

  render() {
    if (this.state.splash_is_enable) {
      return(<SplashScreen />)
    } else {
      return (
        <div>
          <Header background={this.state} />
          <Caraousel />
          <Collection />
          <AboutUs />
          <GetDeal />
          <GetInTouchSub />
          <ReachUsMap />
          <Footer />
          <Whatsaspp/>
        </div>
      );
    }
  }
}

export default Dashboard;
