import { useState, useEffect } from 'react';
import "./Chat.css";
import Conversation from "./Conversation";
import LogoSearch from "./LogoSearch";
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";
import {handleChatApi} from '../Services/userService';



function Chat() {

    const [chats, setChats] = useState([]);
    const[search] = useSearchParams();
    const senderId = search.get("senderid");



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


    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
            <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                        <div>
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
            Right side
            </div>
        </div>
    );
}
export default Chat;