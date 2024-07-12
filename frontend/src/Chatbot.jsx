import React, { useState } from 'react';
import axios from 'axios';
import { ChatContainer, ChatBox, ChatHeader, MessageContainer, Message, MessageText, InputContainer, TextInput, SendButton } from './styles';
import { FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setMessage(''); 

    
    const newResponses = [...responses, { user: userMessage, bot: '...' }];
    setResponses(newResponses);

    try {
      const response = await axios.post('https://chatbot3-oac0.onrender.com/chatbot', { message: userMessage });
      
      newResponses[newResponses.length - 1].bot = response.data.reply;
      setResponses([...newResponses]);
    } catch (error) {
      console.error('Error:', error);
      
      newResponses[newResponses.length - 1].bot = 'Error: Unable to get response.';
      setResponses([...newResponses]);
    }
  };

  return (
    <ChatContainer>
      <ChatBox>
        <ChatHeader>JeetungaaBOT</ChatHeader>
        <MessageContainer>
          {responses.map((res, index) => (
            <div key={index}>
              <Message user>
                <MessageText user>{res.user}</MessageText>
              </Message>
              <Message>
                <MessageText>{res.bot}</MessageText>
              </Message>
            </div>
          ))}
        </MessageContainer>
        <InputContainer>
          <TextInput
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <SendButton onClick={sendMessage}>
            <FaPaperPlane />
          </SendButton>
        </InputContainer>
      </ChatBox>
    </ChatContainer>
  );
};

export default Chatbot;
