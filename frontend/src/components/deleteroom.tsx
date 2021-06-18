import { gql, useMutation } from "@apollo/client";

import * as DeleteRoomTypes from "./__generated__/DeleteRoom";

const DELETE_ROOM = gql`
  mutation DeleteRoom($deleteRoomId: Int!) {
    deleteRoom(id: $deleteRoomId) {
      id
    }
  }
`;

interface RoomProps {
  roomId?: any;
}

const DeleteRoom: React.FC<RoomProps> = ({ roomId }) => {
  const [deleteRoom] =
    useMutation<
      DeleteRoomTypes.DeleteRoom,
      DeleteRoomTypes.DeleteRoomVariables
    >(DELETE_ROOM);
  return (
    <button
      onClick={() => {
        deleteRoom({ variables: { deleteRoomId: roomId } });
      }}
    >
      Delete room {roomId}
    </button>
  );
};

export default DeleteRoom;
