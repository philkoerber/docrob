import { create } from 'zustand';

const greetings = [
  "Hello beautiful! What would you like to know about React?",
  "Hey there! Welcome to the world of ReactJS! What would you like to learn about this awesome library?",
  "Hi! Excited to explore ReactJS with you! What can I assist you with today?",
  "Hi, and welcome! Let's discover the wonders of ReactJS together. What do you want to know?",
  "Hello! Ready to delve into the world of ReactJS? Feel free to ask me anything!",
  "Greetings! Eager to learn about ReactJS? I'm here to provide you with all the information you need."
];

const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

const generateRandomKey = () => {
  const length = 64;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}
const useDocrobStore = create((set) => ({
  chatHistory: [{sender: "bot", message: randomGreeting}],
  addMessage: (message) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, { sender: message.sender, message: message.message }],
    })),
  memoryKey: generateRandomKey(),
}));

export default useDocrobStore;