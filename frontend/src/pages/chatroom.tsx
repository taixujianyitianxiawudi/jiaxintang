import InputMessage from "../components/inputmessage"
import ChatHistory from "../components/chathistory"

const ChatRoom:React.FC = () => {
  return (
    <div>
      <ChatHistory />
      <p>This is a chat room</p>
      <InputMessage />
    </div>
  );
};

export default ChatRoom;