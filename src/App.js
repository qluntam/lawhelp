import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Banner from './pages/Banner.js';
import Home from './pages/Home.js';
import Director from './pages/Director.js';
import Congrats from './pages/Congrats.js';

import React, { useEffect } from 'react';

function App() {

  return (
    <Router basename="/lad">
      <div className="container mx-auto">
          <Switch>
            <Route exact path="/open">
            <div className="page">
              <Header type="opening" />               
              <Banner />
              </div>
            </Route>
            <Route exact path="/">
              <div className="page">
                <Header />
                <Home />
                <Footer />
              </div>
            </Route>
            <Route path="/director">
              <div className="page">
                <Header type="sub" />
                <Director />
                <Footer />
              </div>
            </Route>
            <Route path="/congrats">
              <div className="page">
                <Header type="sub" />
                <Congrats />
                <Footer />
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
