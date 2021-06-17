import InputMessage from "../components/inputmessage"
import ChatHistory from "../components/chathistory"
import UserList from "../components/userlist";

const ChatRoom:React.FC = () => {
  return (
    <div>
      <ChatHistory />
      <p>This is a chat room</p>
      <InputMessage />
      <UserList />
    </div>
  );
};

export default ChatRoom;