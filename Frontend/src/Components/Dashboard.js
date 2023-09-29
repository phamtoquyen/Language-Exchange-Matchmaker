import { useState, useEffect } from 'react';
import React from "react";
import './Registration.css'; 
import './Dashboard.css'; 
import profile from "../Styles/profilepic.jpg";

import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import { handleUserDashBoardApi } from '../Services/dashboardService';
import { handleFindFriendsApi } from '../Services/findFriendsService';
import { handleGetProfile, handleGetUser } from '../Services/userService';


function Dashboard()  {

  //const [errMessage setErrMsg] = useState('');
  const[search] = useSearchParams();
  const id = search.get("id");
  const [FName, setFName] = useState();
  const [LName, setLName] = useState();
  const [email,setEmail] = useState();
  const[friendids, setfriendids] = useState([]);
  const[name, setName] = useState([]);
  const navigate = useNavigate();
  // it should be coming from friend list database a list of id and names to show
  
  
  
  //let friendids = [];
  //let name = ["prit","quyen","maisa","akshar","pratham"];
  let names = [] 
  
  //console.log(data);
  const getInfo = async(e) => {
      try{
        let data = await handleUserDashBoardApi(id);
        setFName(data.user.firstName);
        setLName(data.user.lastName);
        setEmail(data.user.email);
        console.log("start")
        let lists = await handleFindFriendsApi(id);
        setfriendids(lists.chatsData)
        console.log(friendids.length)
        for(let i = 0; i < friendids.length; i++) {
          let friend = await handleUserDashBoardApi(friendids[i].user2_ID);
          names.push(friend.user.firstName)
          
        }
        setName(names)

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
  const Translator = async(e) => {
    navigate({
      pathname: "/Translator",
      search: createSearchParams({
          id: id
      }).toString()
  });

  }
  const handleChat = async(e) => {
    navigate({
      pathname: "/chat",
      search: createSearchParams({
          senderid: id
      }).toString()
  });
  }

  const match = async(e) => {
    try {
      console.log("First Check")
      let data = await handleGetUser(id)
      console.log(data.firstname)
      let data2 = await handleGetProfile(id)
      console.log(data2.native_language)
      //const data = await handleMatch(chat.id);
      //console.log(data)
    } catch (error) {
      console.log(error);
    }
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
  for(let i = 0; i < friendids.length; i++) {
    array.push(
      <div className='left'>
        <img src={profile} alt="DP" className ="leftpic" />
        <text className='text'>{name[i]}</text>
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
        
        
        <Button className="btn-Screen" onClick={match}>Find Friend</Button>
        <Button className="btn-chat" onClick={handleChat}>chat</Button>
        <Button className="btn-Screen" onClick={Translator}>Translator</Button>
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