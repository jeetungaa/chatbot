import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const ChatBox = styled.div`
  width: 60%;
  max-width: 800px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ChatHeader = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export const Message = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: ${({ user }) => (user ? 'row-reverse' : 'row')};
  align-items: flex-start;
`;

export const MessageText = styled.p`
  background: ${({ user }) => (user ? '#0078ff' : '#e5e5ea')};
  color: ${({ user }) => (user ? '#fff' : '#000')};
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 70%;
  word-wrap: break-word;
`;

export const InputContainer = styled.div`
  display: flex;
  border-top: 1px solid #e5e5ea;
  padding-top: 10px;
`;

export const TextInput = styled.input`
  flex-grow: 1;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  font-size: 1rem;
`;

export const SendButton = styled.button`
  background: #0078ff;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #005bb5;
  }
`;
