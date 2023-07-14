"use client"

import React from 'react';
import { chatArray } from './chatArray';
import { useState } from 'react';

import socketIOClient from 'socket.io-client'

const Chat = () => {

  const [socketId, setSocketId] = useState("")

  const socket = socketIOClient("https://flowise-ph0q.onrender.com/") //flowise url

  socket.on('connect', () => {
  setSocketId(socket.id)
});

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
            className={`border border-black rounded-sm w-[90%] p-4 backdrop-blur-sm bg-opacity-100 ${
              chat.sender === 'user' ? 'bg-gray-200' : 'bg-transparent'
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