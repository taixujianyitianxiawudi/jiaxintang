import { gql, useQuery } from "@apollo/client";
import * as ChatByRoomIdTypes from "./__generated__/ChatByRoomId";
import Errors from "./errors";
import Loading from "./loading";
import Avatar from "./avatar";
import { useEffect, useRef, useState } from "react";

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





const PublicChatHistory: React.FC<RoomProps> = ({ roomId }) => {
  const { data, loading, error } = useQuery<
    ChatByRoomIdTypes.ChatByRoomId,
    ChatByRoomIdTypes.ChatByRoomIdVariables
  >(CHAT_BY_ROOM_ID, {
    variables: { chatByRoomIdId: roomId },
    pollInterval: 500,
  });
  
  // Reference to the scroll component
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
