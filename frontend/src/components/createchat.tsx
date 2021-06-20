import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import ChatUtils from "./chatutils/chatutils";
import * as CreateChatTypes from "./__generated__/CreateChat";

const CREATE_CHAT = gql`
  mutation CreateChat($createChatData: CreateChatInput!) {
    createChat(data: $createChatData) {
      id
      content
    }
  }
`;
interface InputMessageProps {
  roomId: number;
}

const CreateChat: React.FC<InputMessageProps> = ({ roomId }) => {

  
  const [chat, setChat] = useState("");
  const chatRef = useRef<HTMLInputElement>(null);
  const [createChat] =
    useMutation<
      CreateChatTypes.CreateChat,
      CreateChatTypes.CreateChatVariables
    >(CREATE_CHAT);
  return (
    <div>
      <ChatUtils chatRef={chatRef} setChat={setChat} />
      <input
        placeholder="type your message"
        onChange={(e) => setChat(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            if (chatRef.current !== null) {
              e.preventDefault();
              createChat({
                variables: {
                  createChatData: { roomId: roomId, content: chat },
                },
              }).catch((e) => {
                return "fuck";
              });
              chatRef.current.value = "";
              setChat("");
            }
          }
        }}
        ref={chatRef}
      />
      <button
        onClick={(e) => {
          if (chatRef.current !== null) {
            e.preventDefault()
            createChat({
              variables: { createChatData: { roomId: roomId, content: chat } },
            }).catch();
            chatRef.current.value = "";
            setChat("");
          }
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default CreateChat;
