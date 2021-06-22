import { gql, useQuery } from "@apollo/client";
import Loading from "./loading";
import Errors from "./errors";
import * as UserListTypes from "./__generated__/UserList";
import PrivateRoom from "./privateroom";
const USER_LIST = gql`
  query UserList {
    allUsers {
      id
      name
      isOnline
    }
  }
`;

const UserList: React.FC = () => {
  const { data, loading, error } = useQuery<UserListTypes.UserList>(USER_LIST);

  if (loading) return <Loading />;
  if (error || data === undefined) return <Errors />;
  if (data) {
    return (
      <div className="overflow-auto max-h-screen">
        {data.allUsers.map((user, i) => (
          <div key={i} className="py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/2.jpg" alt="Profile" />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  {user.name}
                </p>
                <p className="text-gray-500 font-medium">
                  {user.isOnline ? <p>online!</p> : <p>offline</p>}
                </p>
              </div>
              <PrivateRoom key={user.id} userId={user.id}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <Errors />;
};




export default UserList;
