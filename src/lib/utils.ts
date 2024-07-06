import { replaceText } from "./replace";

const apiKey = import.meta.env.VITE_chatgpt_api;
const AccessKey = import.meta.env.VITE_monlam_access_key;

let conversationHistory = [];

// 1. བོད་ཡིག་ངོས་འཛིན་བྱེད་པའི་བྱེད་ནུས།
function detectTibetan(text) {
  return /[\u0F00-\u0FFF]/.test(text);
}

// 2. ChatGPT ནས་ལན་འདེབས་ལེན་པའི་བྱེད་ནུས།
async function getChatGPTResponse(message) {
  try {
    conversationHistory.push({ role: "user", content: message });
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: conversationHistory,
      }),
    });
    const { choices } = await response.json();
    const botMessage = choices[0].message.content;
    
    conversationHistory.push({ role: "assistant", content: botMessage });
    
    const translatedMessage = await translateTextBySentence(botMessage, "bo");
    addMessageToChatBox(translatedMessage, "bot");
  } catch (error) {
    console.error("Error:", error);
    addMessageToChatBox("Error: Could not retrieve response", "bot");
  }
}

// 3. ཡིག་སྒྱུར་བྱེད་པའི་བྱེད་ནུས།
async function translateText(text, targetLanguage) {
  try {
    const formData = new FormData();
    formData.append("input", text);
    formData.append("direction", targetLanguage);
    
    const response = await fetch("https://api.monlam.ai/mt/playground", {
      method: "POST",
      headers: { "x-api-key": AccessKey },
      body: formData,
    });

    if (!response.ok) throw new Error(`Translation API error: ${response.statusText}`);

    const { translation } = await response.json();
    if (!translation) throw new Error("Invalid response from translation API");

    return ["གཉིས་པ་ནི།", "གསུམ་པ་ནི།", "བཞི་པ་ནི།", "ལྔ་པ་ནི།"].reduce(
      (text, phrase) => text.replaceAll(phrase, "\n" + phrase),
      replaceText(translation)
    );
  } catch (error) {
    console.error(`Error during translation: "${text}"`, error);
    throw error;
  }
}

// 4. ཚིག་མཚམས་སོ་སོར་ཡིག་སྒྱུར་བྱེད་པའི་བྱེད་ནུས།
async function translateTextBySentence(text, targetLanguage) {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
  const translatedSentences = await Promise.all(
    sentences.map((sentence) => translateText(sentence, targetLanguage))
  );
  return translatedSentences.filter((s) => !/^[༠-༩\s]+$/.test(s)).join(" ");
}

// 5. འཕྲིན་ཐུང་གསར་པ་སྣོན་པའི་བྱེད་ནུས།
function addMessageToChatBox(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", `${sender}-message`);
  
  const img = document.createElement("img");
  img.src = sender === "user" ? "icons/bo-lang.png" : "icons/icon128.png";
  messageElement.appendChild(img);
  
  messageElement.appendChild(document.createTextNode(message));
  chatBox?.appendChild(messageElement);
  chatBox.scrollTop = chatBox?.scrollHeight;
}

// 6. སྤྱོད་མཁན་གྱི་འཕྲིན་ཐུང་ལ་བཀོལ་སྤྱོད་བྱེད་པའི་བྱེད་ནུས།
async function processUserMessage(message, setIsLoading) {
  const loading = document.getElementById("loading");
  try {
    let translatedMessage = message;
    if (detectTibetan(message)) {
      translatedMessage = await translateText(message, "en");
    }
    loading.style.display = "flex";
    setIsLoading(true);
    await getChatGPTResponse(translatedMessage);
  } catch (error) {
    console.error("Error:", error);
    addMessageToChatBox("Error: Could not process message", "bot");
  } finally {
    loading.style.display = "none";
    setIsLoading(false);
  }
}

// 7. ཕྱིར་འདོན་བྱེད་པའི་བྱེད་ནུས་ཁག
export {
  detectTibetan,
  getChatGPTResponse,
  translateText,
  translateTextBySentence,
  processUserMessage,
  addMessageToChatBox,
};