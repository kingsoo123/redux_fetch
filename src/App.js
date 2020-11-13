import React from "react";
import "./styles/styles.css";
import Background from './Component/Background';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import List from "./Component/List";
function App() {
  return (
    <Router>
        <Route exact path="/" component={Background}/>
        <Route path="/lists" component={List}/>
    </Router>


  );
}

export default App;
