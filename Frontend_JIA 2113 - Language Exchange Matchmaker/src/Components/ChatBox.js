import React, { useState } from "react";
import {handleGetUser, getMessages} from '../Services/userService';
import { useEffect } from "react";
import "./ChatBox.css";
import profile from "../Styles/profilepic.jpg";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'


function ChatBox({ chat, currentUser }) {
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const handleChange = (newMessage)=> {
        setNewMessage(newMessage)
    }

    // fetching data for header
    useEffect(() => {
          //Change operator since chat is not always avail
          const userId = chat != null ? chat["receiverId"] : null
          const getUserData = async () => {
            try {
              const data  = await handleGetUser(userId)
              setUserData(data);
            } catch (error) {
              console.log(error);
            }
          };

          if (chat !== null) getUserData();
    }, [chat, currentUser]);


  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages(chat.id);
        setMessages([data.chatsData]);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);



    return (
    <>
        <div className="ChatBox-container">
        {chat ? (
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
            {/*Chat Message*/}
            <div className="chat-body" >
            {messages.map((message) => (
                <>
                  <div
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
            ))}
            </div>
             {/* chat-sender */}
             <div className="chat-sender">
             <div>+</div>
              <InputEmoji
              value={newMessage}
              onChange={handleChange}
              />
              <div className="send-button button" >Send</div>

             </div>
        </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
        </div>
    </>
    );
}
export default ChatBox;