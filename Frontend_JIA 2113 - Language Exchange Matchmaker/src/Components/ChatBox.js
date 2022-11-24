import React, { useState } from "react";
import {handleGetUser} from '../Services/userService';
import { useEffect } from "react";
import "./ChatBox.css";
import profile from "../Styles/profilepic.jpg";


function ChatBox({ chat, currentUser }) {
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([]);

    // fetching data for header
    useEffect(() => {
          //Change operator since chat is not always avail
          const userId = chat != null ? chat["receiverId"] : null
          console.log("check userId >>>>", userId)
          const getUserData = async () => {
            try {
              const data  = await handleGetUser(userId)
              setUserData(data);
              console.log("check data >>>", data);
            } catch (error) {
              console.log(error);
            }
          };

          if (chat !== null) getUserData();
    }, [chat, currentUser]);



    return (
    <>
        <div className="ChatBox-container">
            <>
                {/*Chat Header*/}
                <div className="chat-header">
                    <div className="follower">
                        <div>

                          <img
                            src={profile}
                            alt="Profile"
                            className="followerImage"
                            style={{ width: "50px", height: "50px", borderRadius: "50%",float: "left" }}
                          />
                          <div className="name" style={{fontSize: '0.8rem',textAlign: "left"}}>
                            <span>{userData?.firstName} {userData?.lastName}</span>
                          </div>
                        </div>
                    </div>
                    <hr
                    style={{
                      width: "95%",
                      border: "0.1px solid #ececec",
                      marginTop: "20px",
                    }}
                  />
                </div>
                {/*Chat Body*/}
                <div className="chat-body" >

                </div>

            </>
        </div>
    </>


    );
}
export default ChatBox;