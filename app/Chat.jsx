import React from 'react';
import { chatArray } from './chatArray';


const Chat = () => {
  return (
    <div className="">
      {chatArray.map((chat, index) => (
        <div
          key={index}
          className={`mb-4 flex items-center ${
            chat.sender === 'user' ? '' : 'justify-start'
          }`}
        >
          <img
            className="h-10 w-10 mr-2"
            src={chat.sender === 'user' ? "user.svg" : "docrob.svg"}
            alt={chat.sender}
          />
          <div
            className={`border border-black rounded-sm w-[90%] p-4 bg-opacity-30 ${
              chat.sender === 'user' ? 'bg-gray-300' : 'bg-gray-200'
            }`}
          >
            {chat.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;