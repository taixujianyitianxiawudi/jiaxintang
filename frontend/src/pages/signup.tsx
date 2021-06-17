import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { isLoggedInVar } from "../cache";
import Loading from "../components/loading";
import * as SignUpTypes from "./__generated__/SignUp"
export const SIGN_UP = gql`
  mutation SignUp($name: String $email: String! $password: String!) {
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

const Signup: React.FC = () => {
  const [signup, { loading, error }] = useMutation<
  SignUpTypes.SignUp,
  SignUpTypes.SignUpVariables
  >(SIGN_UP,{
    onCompleted({ signup }) {
      if (signup && signup.user) {
        localStorage.setItem('token', signup.token as string);
        localStorage.setItem('userId', signup.user.id as unknown as string);
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
      <p>Enter your name, email and password to Signup</p>
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
        Signup
      </button>
    </div>
  );
};
export default Signup;