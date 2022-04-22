import React, { useState } from 'react';
import './message.scss'

const Chat = () => {

    return (
        <div className='container '>
            <span>
                <div className='chat-list chat-header'>
                    <span >유저이름</span>
                    <span>대화추가버튼자리</span>
                <div className='chat-left chat-left-box'>채팅방</div>
                </div>
           
            <span className='chat-right'>채팅방 오른쪽</span>
            </span>
      
           
        </div>
        
        
    );
};


export default Chat;