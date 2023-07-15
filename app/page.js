import Chat from './Chat'

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

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Chat />
    </main>
  )
}
