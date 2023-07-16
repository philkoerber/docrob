import Chat from './Chat'

export default function Home() {
  
  const config = {
    FLOWISE_URI: process.env.FLOWISE_URI,
    OPENAI_KEY: process.env.OPENAI_KEY,
    FLOWISE_KEY: process.env.FLOWISE_KEY,
    MEMORY_KEY: ""
  }

  return (
    <main className="flex items-center justify-between p-10">
      <Chat config={config}/>
    </main>
  )
}
