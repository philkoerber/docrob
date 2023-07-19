import {create} from 'zustand';

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
  chatHistory: [{sender: "bot", message: "Hey beautiful, don't worry! I am here to help."}],
  addMessage: (message) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, { sender: message.sender, message: message.message }],
    })),
  memoryKey: generateRandomKey(),
}));

export default useDocrobStore;