"use client"

import React, { useEffect } from 'react';
import useDocrobStore from './useDocrobStore';
import getAnswer from './getAnswer';

const scrollToBottom = () => {window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });}


const Chat = ({ config }) => {

  const { chatHistory, addMessage, memoryKey } = useDocrobStore()

  
  useEffect(() => {

    if (!config.MEMORY_KEY) {
      console.log("assigning memory key.....")
      config.MEMORY_KEY = memoryKey
    }

    scrollToBottom();
    if (chatHistory[chatHistory.length - 1].sender === "user") {

      const fetchAnswer = async () => {
        const data = await getAnswer({
          question: chatHistory[chatHistory.length - 1].message,
          config: config}
          )
        return data
      }

      fetchAnswer().then((result) => {
        addMessage({ sender: "bot", message: result });
      })
    }
    else {
      
    }
  },[chatHistory])
  
  return (
    <div className="w-full h-full">
      {chatHistory.map((chat, index) => (
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
              chat.sender === 'user' ? 'bg-gray-50' : 'bg-transparent'
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