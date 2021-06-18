import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import DeleteRoom from "./deleteroom";
import Errors from "./errors";
import JoinRoom from "./joinroom";
import Loading from "./loading";
import * as RoomListTypes from "./__generated__/RoomList";

const ROOM_LIST = gql`
  query RoomList {
    allRooms {
      currentNumberofUsers
      name
      details
      owner {
        name
      }
      createdAt
      id
    }
  }
`;

const RoomList: React.FC = () => {
  const { data, error, loading } = useQuery<RoomListTypes.RoomList>(ROOM_LIST, {
    pollInterval: 1000,
  });
  if (loading) return <Loading />;
  if (error || data === undefined) return <Errors />;
  if (data) {
    return (
      <div>
        {data.allRooms.map((room) => (
          <Link to={("/chat/" + room.id) as unknown as string}>
            <div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4">
              <div className="text-gray-500">{room.id}</div>
              <div className="text-gray-500">{room.name}</div>
              <div className="text-gray-500">{room.details}</div>
              <div className="text-gray-500">
                this room now have{room.currentNumberofUsers} users
              </div>
              <div className="text-gray-500">owner: {room.owner?.name}</div>

              <DeleteRoom key={room.id} roomId={room.id} />
            </div>
          </Link>
        ))}
      </div>
    );
  }
  return <Errors />;
};
export default RoomList;
