chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed.");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.tabCapture.capture(
      { audio: true, video: false },
      (stream) => {
        console.log("Captured audio stream", stream);
        // Pass the audio stream to your transcribe logic
      }
    );
  });
  