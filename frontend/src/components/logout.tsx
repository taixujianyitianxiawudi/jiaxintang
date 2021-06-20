import { useApolloClient } from '@apollo/client';
import { isLoggedInVar } from '../cache';

const Logout = () => {
  const client = useApolloClient();
  return (
    <button 
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-pink-400"
    onClick={() => {
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