import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { isLoggedInVar } from "../cache";
import Loading from "../components/loading";
import Signup from "./signup";
import * as LoginTypes from './__generated__/Login'

export const LOGIN_USER = gql`
  mutation Login($email: String! $password: String!) {
    login(email: $email password:$password) {
      user {
        id
      }
      token
    }
  }
`;

const Login: React.FC = () => {
  const [login, { loading, error }] = useMutation<
  LoginTypes.Login,
  LoginTypes.LoginVariables
  >(LOGIN_USER, {
    onCompleted({ login }) {
      if (login && login.user) {
        localStorage.setItem('token', login.token as string);
        localStorage.setItem('userId', login.user.id as unknown as string);
        isLoggedInVar(true);
      }
    }
  });


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (loading) return (
    <Loading />
  );
  if (error) return (
    <div>asdfsadf</div>
  );

  return (
    <div>
      <p>Enter your email and password</p>
      <input 
        placeholder="email"
        type="text"
        onChange={e=>setEmail(e.target.value)}
      />
      <input 
        placeholder="password"
        type="text"
        onChange={e=>setPassword(e.target.value)}
      />
      <button onClick={()=>login({variables: {email, password}})
        .catch(e=>{return("fuck")})
      }>
        Login
      </button>
      <Signup />
    </div>
  );
};
export default Login;