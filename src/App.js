import React from "react";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Workforce" component={WorkForcePage} />

            <Route path="/Gallery" component={GalleryPage} />
            <Route path="/Photos" component={PhotosPage} />

            <Route path="/Contact" component={ContactPage} />

            <Route path="/Training" component={Training} />
            <Route path="/FineArts" component={FineArts} />
            <Route path="/Workshop" component={WorkShop} />
            <Route path="/IT" component={IT} />
            <Route path="/Timing" component={Timings} />
            <Route path="/About" component={AboutPage} />

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
