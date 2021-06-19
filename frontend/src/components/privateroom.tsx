import { gql, useQuery } from "@apollo/client";
import * as UserPrivateRoomTypes from './__generated__/UserPrivateRoom'
import Errors from "./errors";
import { Link } from "react-router-dom";
interface UserIdProps {
    userId?: any;
  }

const USER_PRIVATE_ROOM = gql`
  query UserPrivateRoom($userPrivateRoomId: Int) {
  userPrivateRoom(id: $userPrivateRoomId) {
    id
  }
}
`

const PrivateRoom: React.FC<UserIdProps> = ({ userId }) => {
  const {data} = useQuery<
  UserPrivateRoomTypes.UserPrivateRoom,
  UserPrivateRoomTypes.UserPrivateRoomVariables>(USER_PRIVATE_ROOM,{
      variables: { userPrivateRoomId: userId }
  });
  if (data && data.userPrivateRoom) {
    return (
        <Link to={("/chat/private/"+ data.userPrivateRoom.id +"/"+ userId ) as unknown as string}>
        <div>
        <p>This is a chat room~ ID: {data.userPrivateRoom.id} AND USERID:{userId}</p>
        </div>
        </Link>
      );
  }
  return <Errors />
};

export default PrivateRoom;