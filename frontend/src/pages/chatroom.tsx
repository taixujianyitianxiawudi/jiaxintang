import CreateChat from "../components/createchat"
import ChatHistory from "../components/chathistory"
import UserList from "../components/userlist";
import RoomList from "../components/roomlist";
import CreateRoom from "../components/createroom";

interface RoomProps {
  roomId?: any;
}

const ChatRoom:React.FC<RoomProps> = ({ roomId }) => {
  return (
    <div>
      <ChatHistory roomId={roomId}/>
      <p>This is a chat room</p>
      <CreateChat roomId={roomId}/>
      <UserList />
      <RoomList />
      <CreateRoom />
    </div>
  );
};

export default ChatRoom;