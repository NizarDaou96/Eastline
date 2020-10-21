import React from 'react';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import New from "./Pages/New";
import TopStoriesDatabase from "./Pages/TopStoriesDatabase"
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/new" component={New} />
          <Route exact path="/topstories-database" component={TopStoriesDatabase} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
