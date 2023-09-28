import { useState } from "react";
import "./index.css";
import { SendOutlined } from "@ant-design/icons";
import { sendChat } from "./api";
import {
  useQuery,
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Provider() {
  return (
    <QueryClientProvider client={queryClient}>
      <SendChatUI />
    </QueryClientProvider>
  );
}

export const SendChatUI = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { status, data, error, isFetching } = useQuery(["data"], async () => {
    const data = await sendChat("익명", inputValue);
    return data;
    console.log(data);
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="chat-container">
      <div>{"익명"}</div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder=" Type your message..."
        />
        <button onClick={handleSendMessage}>
          <SendOutlined rev={""} />
        </button>
      </div>
    </div>
  );
};
