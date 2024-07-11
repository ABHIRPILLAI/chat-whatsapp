import React from 'react'
import '../styles/rightsectionheader.css'

function RightSectionHeader({chatName}) {
  return (
      <div className="right-section-header">
          <div className="right-section-header-div1">
              <img src={chatName.imgURL} alt="" className="avatar" />
              <div>
                  <h3>{chatName.name}</h3>
                  <p>Tue, 14 Nov 2023 04:10:32 GMT</p>
              </div>
          </div>

          <div className="right-section-header-div2">
              <img
                  src="/icons/searchright.svg"
                  alt="refresh"
                  className="icons-left-section"
              />
              <img
                  src="/icons/attach.svg"
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

export default RightSectionHeader
