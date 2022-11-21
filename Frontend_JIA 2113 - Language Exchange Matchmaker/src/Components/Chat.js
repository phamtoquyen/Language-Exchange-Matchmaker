import { useState, useEffect } from 'react';
import "./Chat.css";
import LogoSearch from "./LogoSearch";

function Chat() {
    //Get the user who currently login?
    //Get the userInfo,

    const [chats, setChats] = useState([]);
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