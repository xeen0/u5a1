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
import WorkForcePage from './Pages/WorkForcePage/WorkForce';

function App() {
  return (
    <Router>
      <Route exact path='/u5a1' component={Home}/>
      <Route path='/workforce' component={WorkForcePage}/>
      <Route path='/contact' component={ContactPage}/>
      <Route path='/contact' component={ContactPage}/>
      <Route path='/contact' component={ContactPage}/>
      <Route path='/contact' component={ContactPage}/>
      <Route path='/contact' component={ContactPage}/>

      {/* <Route path='/' component={Home}/> */}

      </Router>
    );
}

export default App;
