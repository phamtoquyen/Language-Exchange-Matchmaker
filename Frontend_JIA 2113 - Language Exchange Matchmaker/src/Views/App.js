import logo from './logo.svg';
//import React from "react";
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../Components/Home";
import Registration from "../Components/Registration";
import Login from '../Components/Login';
import React, { Component }  from 'react';
import CreateProfile from '../Components/CreateProfile';
import LogoutConfirmationPage from '../Components/LogoutConfirmationPage';


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route path ="/" element ={<Home />}/>
          <Route path ="/Login" element ={<Login/>}/>
          <Route path ="/Register" element ={<Registration />}/>
          <Route path ="/CreateProfile" element ={<CreateProfile />}/>
          <Route path ="/LogoutConfirmation" element ={<LogoutConfirmationPage />}/>
       </Routes>
      </Router>
    
    </div>
  );
}

export default App;