import { gql, useQuery } from "@apollo/client";
import * as ChatByRoomIdTypes from "./__generated__/ChatByRoomId";
import Errors from "./errors";
import Loading from "./loading";
import Avatar from "./avatar";

export const CHAT_BY_ROOM_ID = gql`
  query ChatByRoomId($chatByRoomIdId: Int) {
    chatByRoomId(id: $chatByRoomIdId) {
      id
      createdAt
      content
      author {
        name
        id
      }
      room {
        id
      }
    }
  }
`;
interface RoomProps {
  roomId: number;
}

const PublicChatHistory: React.FC<RoomProps> = ({ roomId }) => {
  const { data, loading, error } = useQuery<
    ChatByRoomIdTypes.ChatByRoomId,
    ChatByRoomIdTypes.ChatByRoomIdVariables
  >(CHAT_BY_ROOM_ID, {
    variables: { chatByRoomIdId: roomId },
    pollInterval: 500,
  });
  
  if (loading) return <Loading />;
  if (error || data === undefined) return <Errors />;
  if (data) {
    return (
      <div>
        ChatHistory here ID:{roomId}
        {data &&
          data.chatByRoomId.map((chat) => (
            <Avatar 
              id={chat.author?.id as number} 
              key={chat.id} 
              name={chat.author?.name as string} 
              createdAt={chat.createdAt} 
              content={chat.content as string}
            />
          ))}
      </div>
    );
  }
  return <Errors />;
};
export default PublicChatHistory;
