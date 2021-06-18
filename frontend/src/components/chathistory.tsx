import { gql, useQuery } from "@apollo/client";
import Loading from "./loading";
import Errors from "./errors";
import * as ChatByRoomIdTypes from "./__generated__/ChatByRoomId";

export const CHAT_BY_ROOM_ID = gql`
  query ChatByRoomId($chatByRoomIdId: Int) {
    chatByRoomId(id: $chatByRoomIdId) {
      id
      createdAt
      content
      author {
        name
      }
      room {
        id
      }
    }
  }
`;
interface RoomProps {
  roomId?: any;
}

const ChatByRoomId: React.FC<RoomProps> = ({ roomId }) => {
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
            <div key={chat.id}>
              <div>
                {chat.author?.name} {chat.createdAt}
              </div>
              <div>{chat.content}</div>
            </div>
          ))}
      </div>
    );
  }
  return <Errors />;
};

export default ChatByRoomId;
