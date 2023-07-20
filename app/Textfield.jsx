"use client"

import React, { useEffect, useState } from 'react';
import useDocrobStore from './useDocrobStore';

import { MdSend } from "react-icons/md";

function Textfield(props) {
  const [inputText, setInputText] = useState(''); // State for input text

  const [isDisabled, setIsDisabled] = useState(false); // State to control button disabled state

  const { chatHistory, addMessage } = useDocrobStore();


  // Handle input text change
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle sending message
  const handleSendMessage = () => {
    if(!isDisabled){
    // Perform any actions you need when sending the message
    addMessage({sender: "user", message: inputText});
    // Clear the input field
    setInputText('');}
  };

  useEffect(() => {
    if (chatHistory[chatHistory && chatHistory.length - 1]?.sender === "user") {
      setIsDisabled(true)
    }
    else {
      setIsDisabled(false)
    }
  },[chatHistory])

  return (
    <div>
      <div className="flex justify-center items-center">
        <textarea
          id="text_input"
          className="bg-gray-50 text-gray-900 text-sm rounded block w-full max-w-[560px] p-2.5 resize-none overflow-hidden"
          placeholder="Ask something about ReactJS"
          value={inputText}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        ></textarea>
        <button
          onClick={handleSendMessage}
          disabled={isDisabled}
          className="ml-2 text-blue-700 hover:text-blue-300 text-3xl disabled:opacity-0 font-bold py-2 px-4 rounded"
        >
          <MdSend/>
        </button>
      </div>
    </div>
  );
}

export default Textfield;