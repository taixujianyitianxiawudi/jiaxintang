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
  roomId?: any;
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
              createChat({
                variables: {
                  createChatData: { roomId: roomId, content: chat },
                },
              }).catch((e) => {
                return "fuck";
              });
              textRef.current.value = "";
            }
          }
        }}
        ref={textRef}
      />
      <button
        onClick={() => {
          if (textRef.current !== null) {
            createChat({
              variables: { createChatData: { roomId: roomId, content: chat } },
            }).catch((e) => {
              return "fuck";
            });
            textRef.current.value = "";
          }
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default CreateChat;
