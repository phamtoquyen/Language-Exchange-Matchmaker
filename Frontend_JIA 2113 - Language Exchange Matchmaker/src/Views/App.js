import logo from './logo.svg';
import React from "react";
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../Components/Home";
import Registration from "../Components/Registration";
import Login from '../Components/Login';
import CreateProfile from '../Components/CreateProfile';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route path ="/" element ={<Home />}/>
          <Route path ="/Login" element ={<Login/>}/>
          <Route path ="/Register" element ={<Registration />}/>
          <Route path ="/CreateProfile" element ={<CreateProfile />}/>
       </Routes>
      </Router>
    
    </div>
  );
}

export default App;