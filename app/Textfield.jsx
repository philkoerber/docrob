"use client"

import React, { useState } from 'react';

function Textfield(props) {
  const [inputText, setInputText] = useState(''); // State for input text
  const [isDisabled, setIsDisabled] = useState(false); // State to control button disabled state

  // Handle input text change
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle sending message
  const handleSendMessage = () => {
    // Perform any actions you need when sending the message
    // For example, you can access the inputText state here
    console.log('Sending message:', inputText);

    // Clear the input field
    setInputText('');
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <textarea
          id="text_input"
          className="bg-gray-50 text-gray-900 text-sm rounded block w-full max-w-[560px] p-2.5 resize-y overflow-auto"
          placeholder="Don't be shy! Send something!"
          value={inputText}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          disabled={isDisabled}
        ></textarea>
        <button
          onClick={handleSendMessage}
          disabled={isDisabled}
          className="ml-2 bg-blue-500 hover:bg-blue-700 disabled:hidden text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Textfield;