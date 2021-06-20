import { gql, useMutation } from "@apollo/client";
import * as JoinRoomTypes from "./__generated__/JoinRoom";
const JOIN_ROOM = gql`
  mutation JoinRoom($incrementRoomUserId: Int!) {
    incrementRoomUser(id: $incrementRoomUserId) {
      id
      name
    }
  }
`;

interface RoomProps {
  roomId?: any;
}

const JoinRoom: React.FC<RoomProps> = ({ roomId }) => {
  const [joinRoom] =
    useMutation<JoinRoomTypes.JoinRoom, JoinRoomTypes.JoinRoomVariables>(
      JOIN_ROOM
    );

  return (
    <button
      onClick={() => {
        joinRoom({ variables: { incrementRoomUserId: roomId } });
      }}
    >
      Join this room{roomId}
    </button>
  );
};

export default JoinRoom;
