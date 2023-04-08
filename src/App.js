

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Img from './components/slider';
import CenterMode from './components/iconslider';
import NavigationBar from './components/nav';
import Mobileapp from './components/mobileapp';
import Whyswad from './components/whyswad';
import Footer from './components/footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from "./components/Home";
import Solution from "./components/solution";
import Weather from "./components/weather";
import Techs from "./components/techs";


function App() {
  return (
  <div> 
    
    <BrowserRouter>
      <NavigationBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>         

      <Img />
      {/* <CenterMode /> */}
      <Mobileapp />
      <Whyswad />
      <Solution />
      <Techs />
    
      <Weather />
      <Footer />
  </div>
  )
  
}

export default App;
