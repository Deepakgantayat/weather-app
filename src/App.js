import React from 'react';
import Home from "./components/Home/Index"
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import India from "./components/Country/India"

function App() {
  return (
    <BrowserRouter>



      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path = "/india" component = {India} exact = {true}/>
      </Switch>
    </BrowserRouter>
    
   
  );
}

export default App;
