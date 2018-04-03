import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage  from "./containers/HomePage";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route  path="/" exact component={HomePage}> HomePage </Route>        
      </div>
    );
  }
}

export default App;
