import { gql, useQuery } from '@apollo/client';
import Routes from './pages/routes'
import Login from './pages/login';
export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
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
  ? <Routes /> 
  : <div><Login /></div>;
}