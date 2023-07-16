
async function getAnswer({question, config}) {
  console.log(question)
  const body = JSON.stringify(
      {
          "question": question,
          "overrideConfig": {
      "memoryKey": config.MEMORY_KEY
  }
          }
    )
  
    console.log("calling flowise...", config.FLOWISE_URI)
    const response = await fetch(
        config.FLOWISE_URI,
      {
        headers: {
          "Authorization": "Bearer " + config.FLOWISE_KEY,
          "Accept": "application/json",
          "Content-Type": 'application/json'},
            method: "POST",
        body: body
        }
  );
  try {
    const result = await response.json();
    return result;
  }
  catch (e) {
    console.log("hey, error in the getAnswer: " + e)
    return null
  }
    
}

export default getAnswer;