import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { isLoggedInVar } from "../cache";
import Loading from "./loading";

export const LOGIN_USER = gql`
  mutation signup($name: String $email: String! $password: String!) {
    signup(name: $name email: $email password:$password) {
      user {
        id
        email
        name
      }
      token
    }
  }
`;


// Type Definitions
// ====================================================
interface l {
  signup: ll | null;
}
interface ll {
  __typename: "AuthPayload";
  token: string | null;
  user: llu | null;
}
interface llu {
  __typename: "User";
  id: string | null;
  email: string | null;
  name: string | null;
}
interface lp {
  name: string | null,
  email: string,
  password: string,
}
// ====================================================
const Signup: React.FC = () => {
  const [signup, { loading, error }] = useMutation<l,lp>(LOGIN_USER,{
    onCompleted({ signup }) {
      if (signup && signup.user) {
        localStorage.setItem('token', signup.token as string);
        localStorage.setItem('userId', signup.user.id as string);
        isLoggedInVar(true);
      }
    }
  });
  const [name, setName] = useState('');
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
      <p>Enter your name, email and password</p>
      <input 
        placeholder="name"
        type="text"
        onChange={e=>setName(e.target.value)}
      />
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
      <button onClick={()=>signup({variables: {name, email, password}})
        .catch(e=>{return("fuck")})
      }>
        Login
      </button>
    </div>
  );
};
export default Signup;