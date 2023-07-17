async function getAnswer({ question, config }) {
  console.log(question);
  
  const { MEMORY_KEY, FLOWISE_URI, FLOWISE_KEY } = config;
  
  const body = JSON.stringify({
    "question": question,
    "overrideConfig": {
      "memoryKey": MEMORY_KEY
    }
  });
  
  console.log("calling flowise...", FLOWISE_URI);
  
  const response = await fetch(FLOWISE_URI, {
    headers: {
      "Authorization": "Bearer " + FLOWISE_KEY,
      "Accept": "application/json",
      "Content-Type": 'application/json'
    },
    method: "POST",
    body: body
  });
  
  try {
    const result = await response.json();
    return result;
  } catch (e) {
    console.log("hey, error in the getAnswer: " + e);
    return null;
  }
}

export default getAnswer;
