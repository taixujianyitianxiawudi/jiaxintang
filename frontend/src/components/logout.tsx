import { useApolloClient } from '@apollo/client';
import { isLoggedInVar } from '../cache';

const Logout = () => {
  const client = useApolloClient();
  return (
    <button onClick={() => {
      client.cache.evict({ fieldName: 'me' });
      client.cache.gc();
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      isLoggedInVar(false);
      window.location.href="/"
    }}>
      log out!
    </button>
  )
}
export default Logout;