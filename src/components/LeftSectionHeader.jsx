import React from "react";
import "../styles/leftsectionheader.css";
function LeftSectionHeader() {
    return (
        <div className="left-section-header">
            <div className="left-section-header-div1">
                <img
                    src="/images/avatar_147144.png"
                    alt=""
                    className="avatar"
                />
            </div>

            <div className="left-section-header-div2">
                <img
                    src="/icons/refresh.svg"
                    alt="refresh"
                    className="icons-left-section"
                />
                <img
                    src="/icons/message.svg"
                    alt=""
                    className="icons-left-section"
                />
                <img
                    src="/icons/menu.svg"
                    alt=""
                    className="icons-left-section"
                />
            </div>
        </div>
    );
}

export default LeftSectionHeader;
