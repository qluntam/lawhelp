import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Home from './pages/Home.js';
import Director from './pages/Director.js';

function App() {

  return (
    <Router>
      <div className="container mx-auto">
        <div className="page">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/director">
              <Director />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
