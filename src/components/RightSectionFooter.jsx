import React, { useEffect, useState } from "react";
import moment from "moment";
import "../styles/rightsectionfooter.css";
import { v4 as uuidv4 } from "uuid";

function RightSectionFooter({
    selectedUser,
    setMessage,
    message,
    setUsers,
    setShow,
}) {
    const [userMessage, setUserMessage] = useState("");

    const uniqueId = uuidv4();

    const handleSubmit = (event) => {
        event.preventDefault();

        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === selectedUser.id
                    ? {
                          ...user,
                          lastMessageId: uniqueId,
                          lastMessage: userMessage,
                      }
                    : user
            )
        );

        const newMessage = {
            id: uniqueId,
            parentId: selectedUser.id,
            message: userMessage,
            time: moment().format("LT"),
            isUser: true,
            name: selectedUser.name,
        };

        const currentMessages = message ? [...message] : [];

        currentMessages.push(newMessage);

        setMessage(currentMessages);

        setUserMessage("");
    };

    return (
        <div
            style={{
                backgroundColor: "rgb(241,238,238)",
            }}
        >
            <div className="right-footer">
                <div className="div-icons-footer">
                    <img
                        src="/icons/emoji.svg"
                        className="icons-right-footer"
                        alt=""
                    />
                    <img
                        src="/icons/attach.svg"
                        alt=""
                        className="icons-left-section"
                        onClick={() => {
                            setShow({
                                isVisible: true,
                                type: "attach",
                            });
                        }}
                    />
                </div>
                <div style={{ width: "550px" }}>
                    <form action="" className="send-form">
                        
                        <input
                            id="searchQueryInput2"
                            type="text"
                            placeholder="Type a message"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="send-btn"
                            onClick={handleSubmit}
                        >
                            <img
                                src="/icons/send.svg"
                                alt=""
                                className="send-icon"
                            />
                        </button>
                    </form>
                </div>
                <div>
                    <img
                        src="/icons/microphone.svg"
                        alt=""
                        className="icons-right-footer"
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSectionFooter;
