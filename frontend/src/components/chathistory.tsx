import PrivateChatHistory from "./privatechathistory";
import PublicChatHistory from "./publicchathistory";

interface RoomProps {
  roomId: number;
  userId?: number;
}

const ChatHistory: React.FC<RoomProps> = ({ roomId, userId }) => {
  if (userId === 999999) {
    return <PublicChatHistory roomId={roomId}/>
  } else {
    return (
      <PrivateChatHistory roomId={roomId} userId={userId as number}/>
    )
  }
};

export default ChatHistory;
