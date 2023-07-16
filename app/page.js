import Chat from './Chat'

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}



export default function Home() {
  
  const config = {
    FLOWISE_URI: process.env.FLOWISE_URI,
    OPENAI_KEY: process.env.OPENAI_KEY,
    FLOWISE_KEY: process.env.FLOWISE_KEY,
    MEMORY_KEY: generateRandomString(32)
  }

  return (
    <main className="flex items-center justify-between p-10">
      <Chat config={config}/>
    </main>
  )
}
