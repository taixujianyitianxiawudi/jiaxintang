import CreateChat from "../components/createchat"
import ChatHistory from "../components/chathistory"
import { useParams } from "react-router-dom";

interface UserIdProps {
  _userId?: any;
}

//use route params for roomId.
const ChatRoom:React.FC<UserIdProps> = ({ _userId }) => {
  const { roomId, userId } = useParams<{ roomId: string, userId: string }>()
  return (
    <div>
      <ChatHistory roomId={parseInt(roomId,10)} userId={parseInt(userId,10)}/>
      <CreateChat roomId={parseInt(roomId,10)} userId={parseInt(userId,10)}/>
    </div>
  );
};

export default ChatRoom;