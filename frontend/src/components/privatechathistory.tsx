import { gql, useQuery } from "@apollo/client";
import Errors from "./errors";
import Loading from "./loading";
import * as ChatByRoomIdandUserIdTypes from "./__generated__/ChatByRoomIdandUserId";

const CHAT_BY_ROOM_ID_AND_USER_ID = gql`
  query ChatByRoomIdandUserId(
    $chatByRoomIdandUserId: Int
    $chatByRoomIdandUserUserid: Int
  ) {
    chatByRoomIdandUser(
      id: $chatByRoomIdandUserId
      userid: $chatByRoomIdandUserUserid
    ) {
      id
      createdAt
      content
      author {
        name
      }
    }
  }
`;

interface RoomProps {
  roomId: number;
  userId: number;
}

const PrivateChatHistory: React.FC<RoomProps> = ({ roomId, userId }) => {
  const { data, loading, error } = useQuery<
    ChatByRoomIdandUserIdTypes.ChatByRoomIdandUserId,
    ChatByRoomIdandUserIdTypes.ChatByRoomIdandUserIdVariables
  >(CHAT_BY_ROOM_ID_AND_USER_ID, {
    variables: {
      chatByRoomIdandUserId: roomId,
      chatByRoomIdandUserUserid: userId,
    },
    pollInterval: 500,
  });

  if (loading) return <Loading />;
  if (error || data === undefined) return <Errors />;
  if (data) {
    return (
      <div>
        PRIVATE ChatHistory here ID:{roomId}
        {data &&
          data.chatByRoomIdandUser.map((chat) => (
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
export default PrivateChatHistory;
