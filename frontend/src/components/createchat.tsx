import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import ChatUtils from "./chatutils/chatutils";
import * as JoinRoombTypes from './__generated__/JoinRoomb'
import * as LeftRoombTypes from './__generated__/LeftRoomb'
import * as CreateChatPrivateTypes from './__generated__/CreateChatPrivateMutation'
const CREATE_CHAT = gql`
mutation CreateChatPrivateMutation($createChatPrivateData: CreateChatInputPrivate!) {
  createChatPrivate(data: $createChatPrivateData) {
    id
    content
  }
}
`
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
    CreateChatPrivateTypes.CreateChatPrivateMutation,
    CreateChatPrivateTypes.CreateChatPrivateMutationVariables
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
      createChat({
        variables: {
          createChatPrivateData: {
            roomId: roomId,
            content: "enter the room",
          }
        },
      });
    } else if (oldRoomId !== roomId) {
      joinRoom({variables:{incrementRoomUserId: roomId}}).catch();
      leftRoom({variables:{decrementRoomUserId: oldRoomId}}).catch();

      if (userId === 999999) {
        createChat({  
          variables: {
            createChatPrivateData: {
              roomId: roomId,
              content: "enter the room",
            }
          },
        });
      }
      localStorage.setItem("roomId", roomId as unknown as string);

    }
    if (userId === 999999) userId = undefined
  return (
    <div>
      {(false)?<ChatUtils chatRef={chatRef} setChat={setChat}/>: <div></div> }
      <input
        placeholder="type your message"
        onChange={(e) => setChat(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            if (chatRef.current !== null) {
              e.preventDefault();
              createChat({
                variables: {
                  createChatPrivateData: {
                    roomId: roomId,
                    content: chat,
                    touserId: userId,
                  }
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
              variables: {
                createChatPrivateData: {
                  roomId: roomId,
                  content: chat,
                  touserId: userId,
                }
              },
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
