import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import HomePage  from "./containers/HomePage";
import './App.css';
import MessagesList from './containers/MessagesList';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Main Page</Link>        
        <Route  path="/" exact component={HomePage}> HomePage </Route> 
        <Route  path="/messages" exact component={MessagesList}> MessagesList </Route>       
      </div>
    );
  }
}

export default App;
