import { gql, useQuery } from "@apollo/client"
import Logout from "../components/logout"
import Loading from "./loading"
import Error from "./error"
export const MY_PROFILE = gql`
  query MyProfile {
    me {
      id
      name
      email
    }
  }
`
// Type Definitions
// ====================================================
interface m {
  me: me | null
}
interface me {
  id: string
  name?: string | null
  email: string
}

// ====================================================

const Profile: React.FC = () => {
  const { data, loading, error } = useQuery<m>(MY_PROFILE);
  if (loading) return <Loading />
  if (error || data === undefined) return <Error />
  if (data.me) {
    return (
      <div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <p className="text-gray-500">{data.me.id}</p>
          <p className="text-gray-500">{data.me.name}</p>
          <p className="text-gray-500">{data.me.email}</p>
          <p className="text-gray-500">My Profile</p>
          <Logout />
        </div>
      </div>
    )
  }
  return <Error />;
}
  
export default Profile;