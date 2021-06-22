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
    <div className="grid grid-rows-6 max-h-screen space-y-0">
      <div className="row-start-1 row-end-5">
      <ChatHistory roomId={parseInt(roomId,10)} userId={parseInt(userId,10)}/>
      </div>
      <div className="row-start-5 pb-8">
      <CreateChat roomId={parseInt(roomId,10)} userId={parseInt(userId,10)}/>
      </div>
    </div>
  );
};

export default ChatRoom;