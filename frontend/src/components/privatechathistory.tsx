import { gql, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import Avatar from "./avatar";
import Errors from "./errors";
import Loading from "./loading";
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
const SCROLL_DIFF = 200;
function atBottom(element: HTMLDivElement | null): boolean {
  // If element is null, assume it is at bottom
  if (element === null)
    return true;
  const top = element.scrollTop;
  const height = element.clientHeight;
  const scrollHeight = element.scrollHeight;

  return scrollHeight - (top + height) < SCROLL_DIFF;
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

  const histRef = useRef<HTMLDivElement>(null);

  // Obtain three states to calculate whether page is at bottom
  const [isAtBottom, setIsAtBottom] = useState(true);

  // Function to compute at bottom state, and set state accordingly
  const computeBot = () => {
    // Update state on scroll
    setIsAtBottom(atBottom(histRef.current));
  };

  // Function to move to the end
  const goToScrollEnd = () => {
    if (histRef.current) {
      histRef.current.scrollTop = histRef.current.scrollHeight - histRef.current.clientHeight;
    }
  };

  // Scroll to the end if after history changes, it is still at the end
  useEffect(() => {
    if (atBottom(histRef.current))
      goToScrollEnd();
    computeBot();
  });

  if (loading) return <Loading />;
  if (error || data === undefined) return <Errors />;
  if (data) {
    return (
      <div 
        className="overflow-auto max-h-full"
        ref={histRef}
        onScroll={() => {
          computeBot();
        }}
      >
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
