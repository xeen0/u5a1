import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  
import ContactPage from './Pages/ContactPage/Contact';
import WorkForcePage from './Pages/WorkForcePage/WorkForce1';
import Training from './Pages/TrainingPage/Training';
import Timings from './Pages/TimingsPage/Timings';
import Footer from './Components/FooterComponent/Footer'
import Header from './Components/HeaderComponent/Header';
import PayPage from './Pages/PayPage/Pay';
import AboutPage from './Pages/AboutPage/AboutPage';
import RegisteredPage from './Pages/RegisteredPage/RegisteredPage';
import FineArts from './Components/FineArts/FineArts.jsx'
import WorkShop from './Components/WorkShop/WorkShop';
import IT from './Components/IT/IT';
import GalleryPage from './Images/Gallery/GalleryPage';
function App() {
  return (
    <>
    <div class="b">
    <Router>
    <Header/>
      <Route exact path='/u5a1' component={Home}/>
      <Route exact path='/u5a1/Workforce' component={WorkForcePage}/>
      <Route exact path='/u5a1/Gallery' component={GalleryPage}/>

      <Route exact path='/u5a1/Contact' component={ContactPage}/>
      <Route exact path='/u5a1/Training' component={Training}/>
      <Route exact path='/u5a1/Training/FineArts' component={FineArts}/>
      <Route exact path='/u5a1/Training/Workshop' component={WorkShop}/>
      <Route exact path='/u5a1/Training/IT' component={IT}/>

      <Route exact path='/u5a1/Training/Timing' component={Timings}/>
      <Route exact path='/u5a1/About' component={AboutPage} />
      <Route exact path='/u5a1/About/Registered' component={RegisteredPage} />

      <Route path='/u5a1/Pay' component={PayPage}/>
      </Router>
      </div>
      <div class="f">
      <Footer/>
      </div>
      </>
    );
}

export default App;
