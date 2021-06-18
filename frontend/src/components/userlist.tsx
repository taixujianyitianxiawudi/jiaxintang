import { gql, useMutation, useQuery } from "@apollo/client"
import Loading from "./loading"
import Errors from "./errors"
import * as UserListTypes from './__generated__/UserList'
import * as CreateRoomWithUser from  './__generated__/CreateRoomWithUser'
const USER_LIST = gql`
  query UserList {
    allUsers {
      id
      name
      isOnline
    }
  }
`;

export const CREATE_ROOM_WITH_USER = gql`
mutation CreateRoomWithUser($createRoomwithUserData: WithUserRoomCreateInput!) {
  createRoomwithUser(data: $createRoomwithUserData) {
    id
    name
    chatwith {
      name
    }
    owner {
      name
    }
  }
}
`;

const UserList: React.FC = () => {
  const { data, loading, error } = useQuery<UserListTypes.UserList>(USER_LIST);

  const [createRoomWithUser] = useMutation<
  CreateRoomWithUser.CreateRoomWithUser,
  CreateRoomWithUser.CreateRoomWithUserVariables
  >(CREATE_ROOM_WITH_USER);

  if (loading) return <Loading />
  if (error || data === undefined) return <Errors />
  if (data) {
    return (
      <div>
          {data.allUsers.map((user)=>(
            <div 
            className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
            onClick={()=> {

            }}
            >
              <p className="text-gray-500">{user.name}</p>
              <p className="text-gray-500">{user.isOnline
                                                  ? <p>online!</p>
                                                  : <p>offline</p>
                                                                  }</p>
              <button onClick={()=>{
                createRoomWithUser({
                  variables:{
                    createRoomwithUserData:{
                      chatwithId: user.id, 
                      name: user.name as string, 
                      details: "UsertoUser"
                    }
                  }
                })
              }}>
                Chat with {user.name}
              </button>
            </div>
          ))}
      </div>
    )
  }
  return <Errors />;
}
  
export default UserList;