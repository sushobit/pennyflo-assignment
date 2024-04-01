import React, { useState, useEffect } from 'react';
import './chatsection.css';

function ChatSection({ messages, typedMessage, setTypedMessage, name }) {
  const [inputValue, setInputValue] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // Clear messageList when messages prop changes (user changes)
    setMessageList([]);
  }, [messages]);

  const handleMessageChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString(); // Get current time
      const newMessage = {
        content: inputValue,
        timestamp: currentTime
      };
      setMessageList([...messageList, newMessage]);
      setInputValue('');
      setTypedMessage('');
    }
  };

  return (
    <div className="chat-section">
      <h2 className='chat-section-head'>Chat Section</h2>
      <div className="name-section">
        <h3>{name}</h3>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="sent-messages">
        {messageList.map((message, index) => (
          <div key={index} className="sent-message">
            <div className="message-content">{message.content}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          className='input-text'
          type="text"
          value={inputValue}
          onChange={handleMessageChange}
          placeholder="Type a message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatSection;
