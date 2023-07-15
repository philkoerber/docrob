import {create} from 'zustand';



const useDocrobStore = create((set) => ({
  chatHistory: [{sender: "bot", message: "hey beautiful, dont worry! i am here to help"}],
  addMessage: (message) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, { sender: message.sender, message: message.message }],
    })),
}));

export default useDocrobStore;