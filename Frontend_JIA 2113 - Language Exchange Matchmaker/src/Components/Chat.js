import { useState, useEffect } from 'react';
import { useRef} from "react";
import "./Chat.css";
import Conversation from "./Conversation";
import ChatBox from "./ChatBox";
import LogoSearch from "./LogoSearch";
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";
import {handleChatApi, handleGetUser} from '../Services/userService';
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {

    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const[search] = useSearchParams();
    const senderId = search.get("senderid");
    const user = handleGetUser(senderId)
    const dispatch = useDispatch();
    const socket = useRef();
    const [sendMessage, setSendMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [receivedMessage, setReceivedMessage] = useState(null);

    // Get the chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const data  = await handleChatApi(senderId);
                setChats(data.chatsData);

            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [senderId]);

     // Connect to Socket.io
    useEffect(() => {
        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", senderId);
        socket.current.on("get-users", (users) => {
          setOnlineUsers(users);
        });
    }, [user, senderId]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage!==null) {
          socket.current.emit("send-message", sendMessage);}
    }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  });





    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
            <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                        <div onClick={() => {
                        setCurrentChat(chat);
                        }}
                        >
                            <Conversation
                              data={chat}
                              currentUserId={senderId}
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="Right-side-chat">
            <ChatBox
              chat={currentChat}
              currentUser={senderId}
              setSendMessage={setSendMessage}
              receivedMessage={receivedMessage}
              />
            </div>
        </div>
    );
}
export default Chat;