import './App.css';
import {
  HashRouter  as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Banner from './pages/Banner.js';
import Home from './pages/Home.js';
import Director from './pages/Director.js';
import Congrats from './pages/Congrats.js';
import Milestone from './pages/Milestone.js';
import Events from './pages/Events.js';


import React from 'react';

function App() {
  return (
    <Router>
      <div className="xl:container xl:mx-auto">
          <Switch>
            <Route exact path="/">
            <div className="page">
              <Header type="opening" />               
              <Banner />
              </div>
            </Route>
            <Route exact path="/home">
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
            <Route path="/milestone">
              <div className="page">
                <Header type="sub" />
                <Milestone />
                <Footer />
              </div>
            </Route>
            <Route path="/events">
              <div className="page">
                <Header type="sub" />
                <Events />
                <Footer />
              </div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
