import CreateChat from "../components/createchat"
import ChatHistory from "../components/chathistory"
import { useParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import * as JoinRoomaTypes from './__generated__/JoinRooma'
import * as LeftRoomaTypes from './__generated__/LeftRooma'
interface UserIdProps {
  _userId?: any;
}

const JOIN_ROOM = gql`
mutation JoinRooma($incrementRoomUserId: Int!) {
  incrementRoomUser(id: $incrementRoomUserId) {
    id
    name
  }
}
`;

const LEFT_ROOM = gql`
mutation LeftRooma($decrementRoomUserId: Int!) {
  decrementRoomUser(id: $decrementRoomUserId) {
    id
    name
  }
}
`;
//use route params for roomId.
const ChatRoom:React.FC<UserIdProps> = ({ _userId }) => {
  const { roomId, userId } = useParams<{ roomId: string, userId: string }>()
  
//  const [ leftRoom ] = useMutation<
//  LeftRoomaTypes.LeftRooma,
//  LeftRoomaTypes.LeftRoomaVariables
//  >(LEFT_ROOM);

//  const [ joinRoom ] = useMutation<
//  JoinRoomaTypes.JoinRooma,
//  JoinRoomaTypes.JoinRoomaVariables
//  >(JOIN_ROOM);
  
//  joinRoom({variables:{incrementRoomUserId: parseInt(roomId,10)}})
//  leftRoom({variables:{decrementRoomUserId: parseInt(roomId,10)}})
  return (
    <div>
      <ChatHistory roomId={parseInt(roomId,10)} userId={parseInt(userId,10)}/>
      <p>This is a chat room~ ID: {roomId}</p>
      <CreateChat roomId={parseInt(roomId,10)}/>
    </div>
  );
};

export default ChatRoom;