import { useState } from "react";
import Loading from "./Loading";
import Reloader from "./Reloader";
import ThemeSwitch from "./ThemeSwitch";
import { addMessageToChatBox, processUserMessage } from "../lib/utils";

const ChatComponent = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function send(e) {
    e.preventDefault();
    const message = userInput;
    if (message.trim() === "") return;
    addMessageToChatBox(message, "user");
    setUserInput("");
    processUserMessage(message, setIsLoading);
  }

  return (
    <div className="container">
      <div
        style={{
          textAlign: "right",
          paddingTop: 10,
          position: "relative",
          left: -25,
          paddingRight: 25,
          paddingLeft: 20,
        }}
      >
        <Reloader />
        <ThemeSwitch />
        <div className="lang-box">
        <span className="lang">བོད།</span>
        <label className="switch">
        <input id="lang-checkbox" type="checkbox" 
        onChange={handleCheckboxChange}
        
        />
        <span className="slider round"></span>
        </label>
        <span className="lang">EN</span>
    </div>
    <p  id="checkbox-message"></p>

        <h1>
          <img
            style={{ width: 50, position: "relative", top: 10, marginRight: 8 }}
            src="icons/iconBot.png"
            alt=""
          />
          སྨོན་ལམ་གླེང་མོལ།
        </h1>
      </div>

      <div id="chat-box"></div>
      <Loading />
      <form onSubmit={send} className="input-container">
        <input
          type="text"
          id="user-input"
          placeholder="འདི་ནས་གླེང་མོལ་གནང་རོགས་..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button id="send-button" disabled={isLoading} type="submit">
          <img
            id="send-icon"
            src="data:image/svg+xml;base64,PHN2ZyBpZD0ic2VuZC1pY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMi4wMSAyMUwyMyAxMiAyLjAxIDMgMiAxMGwxNSAyLTE1IDJ6Ii8+PC9zdmc+"
            alt="Send"
          />
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
