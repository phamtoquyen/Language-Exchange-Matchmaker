import { useState, useEffect } from 'react';
import "./Chat.css";
import LogoSearch from "./LogoSearch";
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";

function Chat() {
    //Get the user who currently login?
    //Get the userInfo,

    const [chats, setChats] = useState([]);
    const[search] = useSearchParams();
    const senderid = search.get("senderid");
    const receiverid = search.get("receiverid");
    console.log(receiverid);
    return (
        <div className="Chat">
             <div className="Left-side-chat">
                <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                    Conversations
                    </div>
                </div>
            </div>

            <div className="Right-side-chat">
            Hello from right
            </div>

        </div>
    );
}
export default Chat;