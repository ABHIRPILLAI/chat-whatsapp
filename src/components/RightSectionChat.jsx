import React from "react";
import "../styles/rightsectionchat.css";
import LeftChat from "./LeftChat";
import RightChat from "./RightChat";

function RightSectionChat({ messages, selectedUser }) {

    return (
        <div className="chat-main-div">
            <LeftChat />
            {messages.map((message) => {
                if (message?.parentId === selectedUser?.id) {
                    return <RightChat message={message} />;
                }
            })}
            
        </div>
    );
}

export default RightSectionChat;
