"use client"

import React, { useEffect, useState } from 'react';
import useDocrobStore from './useDocrobStore';
import getAnswer from './getAnswer';
import { motion } from 'framer-motion';
import Spinner from './Spinner';
import MarkdownParent from './MarkdownParent';
import { randomGreeting } from './randomGreeting';

const scrollToBottom = () => {window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });}


const Chat = ({ config }) => {

  const { chatHistory, addMessage, memoryKey } = useDocrobStore()
  const [isPending, setIsPending] = useState(false)

  
  useEffect(() => {

    if (chatHistory.length === 0) {
      addMessage({sender: "bot", message: randomGreeting})
    }

    else {
      if (!config.MEMORY_KEY) {
      console.log("assigning memory key.....")
      config.MEMORY_KEY = memoryKey
    }

    scrollToBottom();
    if (chatHistory[chatHistory.length - 1].sender === "user") {
      setIsPending(true);
      const fetchAnswer = async () => {
        const data = await getAnswer({
          question: chatHistory[chatHistory.length - 1].message,
          config: config}
          )
        return data
      }

      fetchAnswer().then((result) => {
        setIsPending(false)
        addMessage({ sender: "bot", message: result });
      })
    }
    else {
      //
    }
    }

    
  },[chatHistory])
  
  return (
    <div className="w-full h-full">
      {chatHistory.map((chat, index) => (
        
        <motion.div
            key={index}
            initial={{
              y: 20,
              opacity: 0,
              scale: 0.9
            }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            }}
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
            <MarkdownParent>{chat.message}</MarkdownParent>
          </div>
          </motion.div>
          
      ))}
      <motion.div
        key={isPending}
        initial={{opacity: 0}}
        animate={isPending ?
          { opacity: 1, transition: {duration: 0.5}} :
          {opacity: 0, transition: {duration: 0}}}>
          <Spinner/>
      </motion.div>
      
    </div>
  );
};

export default Chat;