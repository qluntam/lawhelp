import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useLocation,
  useHistory
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

import i18n from './i18n';

function ReturnHome(props) {

  let lng = i18n.language;
  let history = useHistory();
  let location = useLocation();
  let content = '';

  console.log(i18n);

  React.useEffect(() => {
    if (location.pathname == "/") {
      history.push('/' + lng);
    }
  });

  return(
    <div></div>
  );
}

function PageContent() {
  
  let { locale } = useParams();
  i18n.changeLanguage(locale);

  return (
    
      <div className="xl:container xl:mx-auto">
          <Switch>
            <Route exact path="/:locale">
            <div className="page">
              <Header type="opening" locale={locale} location="/" />               
              <Banner />
              </div>
            </Route>
            <Route path="/:locale/home">
              <div className="page">
                <Header locale={locale} location="/home" />
                <Home />
                <Footer />
              </div>
            </Route>
            <Route path="/:locale/director">
              <div className="page">
                <Header type="sub" locale={locale} location="/director" />
                <Director />
                <Footer />
              </div>
            </Route>
            <Route path="/:locale/message">
              <div className="page">
                <Header type="sub" locale={locale} location="/message" />
                <Congrats />
                <Footer />
              </div>
            </Route>
            <Route path="/:locale/milestone">
              <div className="page">
                <Header type="sub" locale={locale} location="/milestone" />
                <Milestone />
                <Footer />
              </div>
            </Route>
            <Route path="/:locale/events">
              <div className="page">
                <Header type="sub" locale={locale} location="/events" />
                <Events />
                <Footer />
              </div>
            </Route>
          </Switch>
      </div>
    
  );
}


export default function App() {
  return (
    <Router basename="/50th">
      <Route path="/:locale(en|tc|sc)">
        <PageContent />
      </Route>
      <Route exact path="/">
        <ReturnHome />
      </Route>
    </Router>
  );
}
