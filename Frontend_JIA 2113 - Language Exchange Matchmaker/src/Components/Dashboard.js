import { useState, useEffect } from 'react';
import React from "react";
import './Registration.css'; 
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { handleUserDashBoardApi } from '../Services/dashboardService';


function Dashboard()  {

  //const [errMessage setErrMsg] = useState('');
  const[search] = useSearchParams();
  const id = search.get("id");
  const [FName, setFName] = useState();
  const [LName, setLName] = useState();
  const [email,setEmail] = useState();
  const navigate = useNavigate();

 
  
  //console.log(data);
  const getInfo = async(e) => {
      try{
        let data = await handleUserDashBoardApi(id);
        setFName(data.user.firstName);
        setLName(data.user.lastName);
        setEmail(data.user.email);
       
        }
    catch(error){
      console.log(error);
    }

  }

  useEffect(() => {
    // Update the document title using the browser API
    getInfo()
  });
  
  const Logout = async(e) => {
    navigate({
      pathname: "/LogoutConfirmation",
      search: createSearchParams({
          id: id
      }).toString()
  });

  }
  const handleHelp = async(e) => {
    navigate({
      pathname: "/HelpPage",
      search: createSearchParams({
          id: id
      }).toString()
  });
  }
  return (
    
    <div className="screen-Background">
      <div  className="screen-Container">
      <div className="screen-Content">
        
        <h1 >Dashboard</h1>
        <h1>{FName} {LName}</h1>
        <h2>{email}</h2>
        
        
        <Button className="btn-Screen">
          Find Friend
        </Button>
       
        <Button className="btn-Screen" onClick={Logout}>
          Logout
        </Button>

        </div>
        <Button className="btn-help" onClick={handleHelp} >?</Button>
        </div>
      </div>
  
    
  );
    
}
export default Dashboard;