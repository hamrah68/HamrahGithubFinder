import React from 'react';
import Navbar from './components/layout/navbar';
import User from "./components/users/user";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/notFound";
import './App.css';

const App = () => {
  return (

    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
