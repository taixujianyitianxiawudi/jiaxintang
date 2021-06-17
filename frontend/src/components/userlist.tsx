import { gql, useQuery } from "@apollo/client"
import Loading from "./loading"
import Errors from "./errors"
import * as UserListTypes from './__generated__/UserList'
export const USER_LIST = gql`
  query UserList {
    allUsers {
      name
      isOnline
    }
  }
`

const UserList: React.FC = () => {
  const { data, loading, error } = useQuery<UserListTypes.UserList>(USER_LIST);
  if (loading) return <Loading />
  if (error || data === undefined) return <Errors />
  if (data) {
    return (
      <div>
          {data.allUsers.map((user)=>(
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
              <p className="text-gray-500">{user.name}</p>
              <p className="text-gray-500">{user.isOnline
                                                  ? <p>online!</p>
                                                  : <p>offline</p>
                                                                  }</p>
            </div>
          ))}
      </div>
    )
  }
  return <Errors />;
}
  
export default UserList;