import React, { useState } from "react";
import { useEffect } from "react";
import {handleGetUser} from '../Services/userService';
import profile from "../Styles/profilepic.jpg";




function Conversation({data, currentUserId}) {
    const [userData, setUserData] = useState(null)
     useEffect(()=> {
        const userId = data["receiverId"]
        const getUserData = async ()=> {
          try
          {
             const data =await handleGetUser(userId)
             setUserData(data)
          }
          catch(error)
          {
            console.log(error)
          }
        }

        getUserData();
      }, [])


    return (
        <>
              <div className="follower conversation">
                <div>
                  <div className="online-dot"></div>
                  <img
                    src={profile}
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px", borderRadius: "50%",float: "left" }}
                  />
                  <div className="name" style={{fontSize: '0.8rem'}}>
                    <span>{userData?.firstName} {userData?.lastName}</span>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
            </>
    );
}
export default Conversation;