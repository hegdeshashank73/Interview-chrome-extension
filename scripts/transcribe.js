async function transcribeAudio(audioBlob) {
    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
        "Content-Type": "audio/wav"
      },
      body: audioBlob
    });
    const data = await response.json();
    return data.text;
  }
  