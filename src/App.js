import React from 'react';  
import './App.css';  
import BookSearch from "./Component/Search Bar/BookSearch.js";
import Footer from "./Component/Footer/Footer.js";
import "./Component/Footer/Footer.css";
import ControlledCarousel from './Component/Slider/Slider';
import Popular from "./Component/Popular/PopularList.js";
import Navbar from './Component/NavBar/Navbar.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Catergories from "./Component/NavBar/Catergories.js";
import ContactUs from "./Component/NavBar/ContactUs.js";
import SignUp from "./Component/NavBar/SignUp.js";
import Home from "./Component/NavBar/Home.js";


  
function App() {  
  return (  
    <>
    <Router>
 <Navbar />
<Switch>
  <Route path='/' exact component={Home} />
  <Route path='/catergories' exact component={Catergories} />
  <Route path='/contactUs' exact component={ContactUs} />
  <Route path='/SignUp' exact component={SignUp} />




</Switch>



  </Router>

    <div>
      <ControlledCarousel />
    </div>

    <div>
    <BookSearch /> 
    </div>

    <div>
      <Popular />
    </div>

    <div>
      <Footer />
      </div> 

    </>
  )  
}  
  
export default App; 