import { gql ,useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import DeleteRoom from "./deleteroom";
import Errors from "./errors";
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
      <div className="overflow-auto max-h-screen">
        {data.allRooms.map((room, i) => (
          <Link className="max-w-sm" to={("/chat/public/" + room.id + "/999999") as unknown as string}>
          <div key={i} className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/4.jpg" alt="Profile" />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  room name:{room.name} owner: {room.owner?.name}
                </p>
                <p className="text-gray-500 font-medium">
                  {room.details} 
                </p>
                <p className="text-gray-500 font-medium">
                  {room.currentNumberofUsers} users inside
                </p>
              </div>
              <DeleteRoom key={room.id} roomId={room.id} />
            </div>
          </div>
          </Link>
        ))}
      </div>
    );
  }
  return <Errors />;
};
export default RoomList;
