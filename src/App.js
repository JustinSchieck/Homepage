import React from "react";
import styled from 'styled-components';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AnimatedNav from './components/AnimatedNav';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <AnimatedNav />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
