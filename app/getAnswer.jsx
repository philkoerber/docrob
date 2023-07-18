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
  
  try {
    const response = await fetch(FLOWISE_URI, {
      headers: {
        "Authorization": "Bearer " + FLOWISE_KEY,
        "Accept": "application/json",
        "Content-Type": 'application/json'
      },
      method: "POST",
      body: body
    });

    if (!response.ok) {
      return('ERROR in receiving answer from FlowiseAPI. Please reload the page.');
    }

    const result = await response.json();
    return result;
  } catch (e) {
    console.log("Error in getAnswer:", e);
    return "ERROR in receiving answer from FlowiseAPI. Please reload the page.";
  }
}

export default getAnswer;
