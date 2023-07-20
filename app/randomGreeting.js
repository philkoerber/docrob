const greetings = [
  "Hello beautiful! What would you like to know about React?",
  "Hey there! Welcome to the world of ReactJS! What would you like to learn about this awesome library?",
  "Hi! Excited to explore ReactJS with you! What can I assist you with today?",
  "Hi, and welcome! Let's discover the wonders of ReactJS together. What do you want to know?",
  "Hello! Ready to delve into the world of ReactJS? Feel free to ask me anything!",
  "Greetings! Eager to learn about ReactJS? I'm here to provide you with all the information you need."
];

export const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];