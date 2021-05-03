import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Home from './pages/Home.js';

function App() {
  return (
    <Router>
      <div class="container mx-auto">
        <div class="page">
          <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
