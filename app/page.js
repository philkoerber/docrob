import Chat from './Chat'

const config = {
    FLOWISE_URI: process.env.FLOWISE_URI,
    OPENAI_KEY: process.env.OPENAI_KEY,
    FLOWISE_KEY: process.env.FLOWISE_KEY
  }

export default function Home() {
  
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Chat config={config}/>
    </main>
  )
}
