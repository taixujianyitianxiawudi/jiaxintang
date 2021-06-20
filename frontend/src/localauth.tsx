import { gql, useQuery } from '@apollo/client';
import Login from './pages/login';
import Main from './pages/main';
export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    UserOrRoom: Boolean!
  }
`;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export default function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn 
  ? <Main /> 
  : <div><Login /></div>;
}

