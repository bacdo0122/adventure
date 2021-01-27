import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Products" exact component={Products} />
        <Route path="/Sign-up" exact component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
