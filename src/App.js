import React, {useState} from 'react';
import './App.css';
import SplashScreen from './components/splash_screen/SplashScreen';
import Dashboard from './components/dashboard/Dashboard'

function App() {

  let splash_is_enable = true;
  const [set, set_screen] = useState(splash_is_enable)
  setTimeout(() => {
    set_screen(false)
  }, 1000);

  return (
    <div className="App">
      {set === true ? <SplashScreen/> : <Dashboard/>}
     
    </div>
  );
}

export default App;
