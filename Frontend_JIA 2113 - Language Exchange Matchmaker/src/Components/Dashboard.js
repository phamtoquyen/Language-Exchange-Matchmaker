import { useState, useEffect } from 'react';
import React from "react";
import './Registration.css'; 
import './Dashboard.css'; 
import profile from "../Styles/profilepic.jpg";

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
  // it should be coming from friend list database a list of id and names to show
  let friendids = [1, 2, 3, 4, 5];
  let name = ["prit","quyen","maisa","akshar","pratham"];
 
  
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
  const handleChat = async(e,p) => {
    navigate({
      pathname: "/chat",
      search: createSearchParams({
          senderid: id,
          receiverid: p
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
  let array = [];
  for(let i = 0; i < 5; i++) {
    array.push(
      <div className='left'>
        <img src={profile} alt="DP" class="leftpic" />
        <text className='text'>{name[i]}</text>
        <Button className="btn-chat" onClick={event => handleChat(event,i)}>chat</Button>
      </div>
    );
  }
  return (
    
    <div className="screen-Background">
      <div  className="screen-Container">
      <div className="screen-Content">
        
        <h1 >Dashboard</h1>
        <img src={profile} alt="logo" class="center" />
        <h1>{FName} {LName}</h1>
        <h2>{email}</h2>
        
        
        <Button className="btn-Screen">
          Find Friend
        </Button>
       
        <Button className="btn-Screen" onClick={Logout}>
          Logout
        </Button>
        <h2>Friends</h2>
        <div className="frientlist">
          {array}
        </div>
        
        </div>
        <Button className="btn-help" onClick={handleHelp} >?</Button>
        </div>
      </div>
  
    
  );
    
}
export default Dashboard;