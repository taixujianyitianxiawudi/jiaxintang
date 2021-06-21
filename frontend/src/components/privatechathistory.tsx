import { gql, useQuery } from "@apollo/client";
import Avatar from "./avatar";
import Errors from "./errors";
import Loading from "./loading";
import * as ChatByRoomIdandUserIdTypes from "./__generated__/ChatByRoomIdandUserId";
import * as ChatPrivateTypes from "./__generated__/chatPrivate"
const CHAT_PRIVATE = gql`
query chatPrivate($chatPrivateId: Int, $chatPrivateUserid: Int) {
  chatPrivate(id: $chatPrivateId, userid: $chatPrivateUserid) {
    id
    createdAt
    content
    author {
      name
      id
    }
    touser {
      id
      name
    }
  }
}
`
interface RoomProps {
  roomId: number;
  userId: number;
}

const PrivateChatHistory: React.FC<RoomProps> = ({ roomId, userId }) => {
  const myuserId = parseInt(localStorage.getItem("userId") as string, 10)
  const { data, loading, error } = useQuery<
  ChatPrivateTypes.chatPrivate,
  ChatPrivateTypes.chatPrivateVariables
  >(CHAT_PRIVATE, {
    variables: {
      "chatPrivateId": myuserId,
      "chatPrivateUserid": userId
    },
    pollInterval: 500,
  });

  if (loading) return <Loading />;
  if (error || data === undefined) return <Errors />;
  if (data) {
    return (
      <div>
        {data &&
          data.chatPrivate.map((chat) => (
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
export default PrivateChatHistory;
