import { gql, useMutation } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import ChatUtils from "./chatutils/chatutils";
import * as CreateChatTypes from "./__generated__/CreateChat";
import * as JoinRoombTypes from './__generated__/JoinRoomb'
import * as LeftRoombTypes from './__generated__/LeftRoomb'

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
  userId?: number;
}

const JOIN_ROOM = gql`
mutation JoinRoomb($incrementRoomUserId: Int!) {
  incrementRoomUser(id: $incrementRoomUserId) {
    id
    name
  }
}
`;

const LEFT_ROOM = gql`
mutation LeftRoomb($decrementRoomUserId: Int!) {
  decrementRoomUser(id: $decrementRoomUserId) {
    id
    name
  }
}
`;

const CreateChat: React.FC<InputMessageProps> = ({ roomId, userId}) => {

  const [chat, setChat] = useState("");
  const chatRef = useRef<HTMLInputElement>(null);
  const [createChat] =
    useMutation<
      CreateChatTypes.CreateChat,
      CreateChatTypes.CreateChatVariables
    >(CREATE_CHAT);

    const [ leftRoom ] = useMutation<
    LeftRoombTypes.LeftRoomb,
    LeftRoombTypes.LeftRoombVariables
    >(LEFT_ROOM);
  
    const [ joinRoom ] = useMutation<
    JoinRoombTypes.JoinRoomb,
    JoinRoombTypes.JoinRoombVariables
    >(JOIN_ROOM);

    let oldRoomId = parseInt(localStorage.getItem("roomId") as string)
    if (localStorage.getItem("roomId") === null) {
      joinRoom({variables:{incrementRoomUserId: roomId}})
      localStorage.setItem("roomId", roomId as unknown as string)
      const newroomId = parseInt(localStorage.getItem("roomId") as string,10)
      createChat({
        variables: {
          createChatData: { roomId: newroomId, content: "enter the room" },
        },
      });
    } else if (oldRoomId !== roomId) {
      joinRoom({variables:{incrementRoomUserId: roomId}}).catch();
      leftRoom({variables:{decrementRoomUserId: oldRoomId}}).catch();

      if (userId === 999999) {
        createChat({
          variables: {
            createChatData: { roomId: roomId, content: "enter the room" },
          },
        });
      }
      localStorage.setItem("roomId", roomId as unknown as string);

    }

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
