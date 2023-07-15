
import React from 'react';

async function chatQuery(data) {
  
    console.log("calling flowise...")
    const response = await fetch(
        process.env.FLOWISE_URI,
      {
        headers: {
          "Authorization": "Bearer " + process.env.FLOWISE_KEY,
          "Accept": "application/json",
          "Content-Type": 'application/json'},
            method: "POST",
            body: JSON.stringify(data)
        }
  );
  try {
    const result = await response.json();
    return result;
  }
  catch (e) {
    console.log("hey, error in the chatQuery: " + e)
    return null
  }
    
}

const Chat = () => {

  const chatHistory = []
  
  return (
    <div className="">
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