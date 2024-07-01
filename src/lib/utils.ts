import { replaceText } from "./replace";

const apiKey = process?.env?.chatgpt_api;
const monlam_api = process?.env?.monlam_api;
function detectTibetan(text) {
  const tibetanRegex = /[\u0F00-\u0FFF]/;
  return tibetanRegex.test(text);
}

async function getChatGPTResponse(message) {
  const url = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const body = {
    model: "gpt-4",
    messages: [{ role: "user", content: message }],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    const botMessage = data.choices[0].message.content;
    const translatedMessage = await translateTextBySentence(botMessage, "bo");
    addMessageToChatBox(translatedMessage, "bot");
  } catch (error) {
    console.error("Error:", error);
    addMessageToChatBox("Error: Could not retrieve response", "bot");
  }
}

async function translateText(text, targetLanguage) {
  const languageCode = targetLanguage === "en" ? "<2en>" : "<2bo>";
  try {
    const response = await fetch(
      "https://rvx0i2sheyjtydoh.us-east-1.aws.endpoints.huggingface.cloud",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: monlam_api,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: languageCode + text,
          parameters: {},
        }),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `Translation API error: ${response.statusText}, Details: ${errorDetails}`
      );
    }

    const data = await response.json();
    if (!data || !data[0] || !data[0].generated_text) {
      throw new Error("Invalid response from translation API");
    }

    let translatedText = data[0].generated_text;

    translatedText = replaceText(translatedText);
    translatedText = addNewLineBeforeText(translatedText, "གཉིས་པ་ནི།");
    translatedText = addNewLineBeforeText(translatedText, "གསུམ་པ་ནི།");
    translatedText = addNewLineBeforeText(translatedText, "བཞི་པ་ནི།");
    translatedText = addNewLineBeforeText(translatedText, "ལྔ་པ་ནི།");

    return translatedText;
  } catch (error) {
    console.error(
      `Error during translation API call for text: "${text}"`,
      error
    );
    throw error;
  }
}

function containsOnlyTibetanNumbers(text) {
  const tibetanNumberRegex = /^[༠-༩\s]+$/;
  return tibetanNumberRegex.test(text);
}

function addNewLineBeforeText(text, searchText) {
  return text.replaceAll(searchText, "\n" + searchText);
}

async function translateTextBySentence(text, targetLanguage) {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
  const translatedSentences = await Promise.all(
    sentences.map((sentence) => translateText(sentence, targetLanguage))
  );

  return translatedSentences
    .filter(
      (translatedSentence) => !containsOnlyTibetanNumbers(translatedSentence)
    )
    .join(" ");
}
function addMessageToChatBox(message, sender) {
  const messageElement = document.createElement("div");
  const chatBox = document.getElementById("chat-box");

  messageElement.classList.add("message", `${sender}-message`);
  const img = document.createElement("img");
  img.src = sender === "user" ? "icons/bo-lang.png" : "icons/icon128.png";
  messageElement.appendChild(img);
  const textNode = document.createTextNode(message);
  messageElement.appendChild(textNode);
  chatBox?.appendChild(messageElement);
  chatBox.scrollTop = chatBox?.scrollHeight;
}

async function processUserMessage(message) {
  const loading = document.getElementById("loading");
  try {
    const isTibetan = detectTibetan(message);
    if (isTibetan) {
      message = await translateText(message, "en");
    }
    loading.style.display = "flex";
    await getChatGPTResponse(message);
  } catch (error) {
    console.error("Error:", error);
    addMessageToChatBox("Error: Could not process message", "bot");
  } finally {
    loading.style.display = "none";
  }
}

export {
  addNewLineBeforeText,
  containsOnlyTibetanNumbers,
  detectTibetan,
  getChatGPTResponse,
  translateText,
  translateTextBySentence,
  processUserMessage,
  addMessageToChatBox,
};
