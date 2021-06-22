import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import * as CreateRoomTypes from "./__generated__/CreateRoom";

const CREATE_ROOM = gql`
  mutation CreateRoom($createRoomData: RoomCreateInput!) {
    createRoom(data: $createRoomData) {
      id
    }
  }
`;

const CreateRoom: React.FC = () => {
  const [createRoom] =
    useMutation<
      CreateRoomTypes.CreateRoom,
      CreateRoomTypes.CreateRoomVariables
    >(CREATE_ROOM);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col">
      <p>Enter Room informations</p>
      <input
        className="py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-pink-100 focus:text-gray-900"
        placeholder="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
      />
      <input
      className="py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-pink-100 focus:text-gray-900"
        placeholder="details"
        type="text"
        onChange={(e) => setDetails(e.target.value)}
        ref={detailsRef}
      />
      <button
      className="button-primary"
        onClick={() => {
          if (nameRef.current !== null) {
            createRoom({
              variables: { createRoomData: { name, details, public: true }},
            }).catch();
            nameRef.current.value = "";
            if (detailsRef.current !== null) {
              detailsRef.current.value = "";
            }
          }
        }}
      >
        CreateRoom
      </button>
    </div>
  );
};

export default CreateRoom;
