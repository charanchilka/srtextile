import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
const Dashboard = lazy(
  () => import("./components/dashboard/Dashboard")
);
const GetInTouchMain = lazy(
  () => import("./components/get_in_touch_main/GetInTouchMain")
);
const AboutUsMain = lazy(
  () => import("./components/about_us_main/about_us_main")
);
const Infrastructure = lazy(
  () => import("./components/infrastructure_main/infrastructure_main")
);

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="https://charanchilka.github.io/srtextile/">
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/get-in-touch" component={GetInTouchMain} />
            <Route exact path="/about-us" component={AboutUsMain} />
            <Route exact path="/infrastructure" component={Infrastructure} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}



export default App;
