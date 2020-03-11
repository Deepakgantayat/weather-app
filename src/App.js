import React from 'react';
import Home from "./components/Home/Index"
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import India from "./components/Country/India"
import Russia from "./components/Country/Russia"
import Canada from "./components/Country/Canada"
import Australia from "./components/Country/Australia"
import Brazil from "./components/Country/Brazil"

function App() {
  return (
    <BrowserRouter>



      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path = "/india" component = {India} exact = {true}/>
      <Route path = "/russia" component = {Russia} exact = {true}/>
      <Route path = "/canada" component = {Canada} exact = {true}/>
      <Route path = "/australia" component = {Australia} exact = {true}/>
      <Route path = "/brazil" component = {Brazil} exact={true}/>
      </Switch>
    </BrowserRouter>
    
   
  );
}

export default App;
