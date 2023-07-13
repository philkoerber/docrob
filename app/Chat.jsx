import React from 'react';
import { chatArray } from './chatArray';

async function query(data) {
    const response = await fetch(
        "https://flowise-ph0q.onrender.com/api/v1/prediction/d9a8839e-b2a6-4dbb-85ad-6a866509341a",
        {
            headers: { Authorization: "Bearer " + process.env.FLOWISE_KEY },
            method: "POST",
            body: data
        }
    );
  
  console.log(response)
    return response;
}

query({"question": "Hey, how are you?"}).then((response) => {
    console.log(response);
});


const Chat = async () => {

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