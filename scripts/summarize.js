async function summarizeText(transcription) {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Summarize the following text:\n\n${transcription}`,
        max_tokens: 150
      })
    });
    const data = await response.json();
    return data.choices[0].text;
  }
  