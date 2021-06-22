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
  UserPrivateRoomTypes.UserPrivateRoomVariables
  >(USER_PRIVATE_ROOM,{
      variables: { userPrivateRoomId: userId }
  });
  if (data && data.userPrivateRoom) {
    return (
        <Link to={("/chat/private/"+ data.userPrivateRoom.id +"/"+ userId ) as unknown as string}>
          <div className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</div>
        </Link>
      );
  }
  return <Errors />
};

export default PrivateRoom;