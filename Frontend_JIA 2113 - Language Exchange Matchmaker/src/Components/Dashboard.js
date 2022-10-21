import { useState, useEffect } from 'react';
import React from "react";
import './Registration.css'; 
import { useSearchParams, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { handleUserDashBoardApi } from '../Services/dashboardService';


function Dashboard()  {

  //const [errMessage setErrMsg] = useState('');
  const[search] = useSearchParams();
  const id = search.get("id");
  const [FName, setFName] = useState();
  const [LName, setLName] = useState();
  const [email,setEmail] = useState();


  //const navigate = useNavigate();

 
  
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
 
  return (
    
    <div className="screen-Background">
      <div  className="screen-Container">
      

        <h1 >Dashboard</h1>
        <h1>{FName} {LName}</h1>
        <h2>{email}</h2>
        
        <Button className="btn-Screen">
          Find Friend
        </Button>
        </div>
      
      </div>
  
    
  );
    
}
export default Dashboard;