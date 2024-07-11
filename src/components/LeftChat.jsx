import React from 'react'
import '../styles/leftchat.css'


function LeftChat() {
  return (
      <div className="left-chat-div">
          <div className="left-chat">
              <p className="message-recieved-name">Abhilash Radhakrishnan</p>
              <div className="message-recieved-content">
                  <span className="message-recieved">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita eos saepe facere numquam ipsam necessitatibus
                      porro, accusamus explicabo praesentium voluptatem dolorem
                      tenetur impedit modi! Enim, distinctio! Corrupti
                      consequatur laudantium tempore.
                  </span>
                  <p className="time-stamp-recieved">Tue, 14 Nov 2023 04:10:32 GMT</p>
              </div>
          </div>
      </div>
  );
}

export default LeftChat
