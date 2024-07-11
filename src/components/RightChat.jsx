import React from "react";
import "../styles/rightchat.css";

function RightChat({ message }) {
    return (
        <div className="right-chat-div">
            <div className="right-chat">
                <p className="message-sent-name">{message.name}</p>
                <div className="message-content">
                    <span className="message">{message.message}</span>
                    <p className="time-stamp">{message.time}</p>
                </div>
            </div>
        </div>
    );
}

export default RightChat;
