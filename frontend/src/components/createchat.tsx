import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
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
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [createChat] =
    useMutation<
      CreateChatTypes.CreateChat,
      CreateChatTypes.CreateChatVariables
    >(CREATE_CHAT);
  return (
    <div>
      <textarea
        placeholder="type your message"
        onChange={(e) => setChat(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            if (textRef.current !== null) {
              e.preventDefault();
              createChat({
                variables: {
                  createChatData: { roomId: roomId, content: chat },
                },
              }).catch((e) => {
                return "fuck";
              });
              textRef.current.value = "";
              setChat("");
            }
          }
        }}
        ref={textRef}
      />
      <button
        onClick={(e) => {
          if (textRef.current !== null) {
            e.preventDefault()
            createChat({
              variables: { createChatData: { roomId: roomId, content: chat } },
            }).catch();
            textRef.current.value = "";
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
