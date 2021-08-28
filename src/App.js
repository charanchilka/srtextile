import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
const Dashboard = lazy(
  () => import("./components/dashboard/Dashboard")
);
const GetInTouchMain = lazy(
  () => import("./components/get_in_touch_main/GetInTouchMain")
);

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/srtextile">
        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/get-in-touch" component={GetInTouchMain} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}



export default App;
