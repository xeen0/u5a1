import React from "react";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactPage from "./Pages/ContactPage/Contact";
import WorkForcePage from "./Pages/WorkForcePage/WorkForce1";
import Training from "./Pages/TrainingPage/Training";
import Timings from "./Pages/TimingsPage/Timings";
import Footer from "./Components/FooterComponent/Footer";
import Header from "./Components/HeaderComponent/Header";
import PayPage from "./Pages/PayPage/Pay";
import AboutPage from "./Pages/AboutPage/AboutPage";
import RegisteredPage from "./Pages/RegisteredPage/RegisteredPage";
import FineArts from "./Components/FineArts/FineArts.jsx";
import WorkShop from "./Components/WorkShop/WorkShop";
import IT from "./Components/IT/IT";
import GalleryPage from "./Pages/Gallery/GalleryPage";
import PhotosPage from "./Components/Photos/PhotosPage";
import ExpertisePage from "./Pages/ExpertPage/Expertise";
import WEPage from "./Pages/WEPage/WEPage";

function App() {
  return (
    <>
      <div class="b">
        <Router>
          <Header />
          {/* <Route exact path='/u5a1' component={Home}/>
      <Route exact path='/u5a1/Workforce' component={WorkForcePage}/>
      <Route exact path='/u5a1/Gallery' component={GalleryPage}/>
      <Route exact path='/u5a1/Gallery/Photos' component={PhotosPage}/>

      <Route exact path='/u5a1/Contact' component={ContactPage}/>
      <Route exact path='/u5a1/Training' component={Training}/>
      <Route exact path='/u5a1/Training/FineArts' component={FineArts}/>
      <Route exact path='/u5a1/Training/Workshop' component={WorkShop}/>
      <Route exact path='/u5a1/Training/IT' component={IT}/>

      <Route exact path='/u5a1/Training/Timing' component={Timings}/>
      <Route exact path='/u5a1/About' component={AboutPage} />
      <Route exact path='/u5a1/About/Registered' component={RegisteredPage} />
      <Route exact path='/u5a1/About/Expertise' component={ExpertisePage} />
      <Route exact path='/u5a1/About/WE' component={WEPage} />



      <Route path='/u5a1/Pay' component={PayPage}/> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Workforce" component={WorkForcePage} />

            <Route path="/Gallery" component={GalleryPage} />
            <Route path="/Gallery/Photos" component={PhotosPage} />

            <Route path="/Contact" component={ContactPage} />

            <Route path="/Training" component={Training} />
            <Route path="/FineArts" component={FineArts} />
            <Route path="/Workshop" component={WorkShop} />
            <Route path="/IT" component={IT} />
            <Route path="/Timing" component={Timings} />

            <Route path="/About" component={AboutPage} />
            <Route path="/Registered" component={RegisteredPage} />
            <Route path="/Expertise" component={ExpertisePage} />
            <Route path="/WE" component={WEPage} />

            <Route path="/Pay" component={PayPage} />
          </Switch>
        </Router>
      </div>
      <div class="f">
        <Footer />
      </div>
    </>
  );
}

export default App;
