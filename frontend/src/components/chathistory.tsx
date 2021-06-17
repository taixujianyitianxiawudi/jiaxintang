import { gql, useQuery } from "@apollo/client"
import Loading from "./loading";
import Errors from "./errors";
import * as ChatHistoryTypes from './__generated__/ChatHistory'
export const CHAT_HISTORY = gql`
  query ChatHistory{
    allPosts {
      id
      content
      author {
        name
      }
      createdAt
  }
}
`;

const ChatHistory: React.FC = () => {
  //const [id, setId] = useState('')
  //const [name, setName] = useState('')
  //const [email, setEmail] = useState('')
  const { data, loading, error } = useQuery<ChatHistoryTypes.ChatHistory>(CHAT_HISTORY, {
    pollInterval: 500,
  });

  if (loading) return <Loading />
  if (error || data === undefined) return <Errors />
  if (data) {
    return (
      <div>
        {data.allPosts && data.allPosts.map((post) => (
          <div key={post?.id}>
            <div>{post?.author?.name}  {post?.createdAt}</div>
            <div>{post?.content}</div>
          </div>
        ))}
      </div>
    )
  }
  return <Errors />;
}
  
export default ChatHistory;