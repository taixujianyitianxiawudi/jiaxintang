import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
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
    <BrowserRouter>

     <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
               Click here to signup
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={()=>login({variables: {email, password}})
              .catch(e=>{return("fuck")})
            }>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
      </Route>
     </Switch>
    </BrowserRouter>
  );
};
export default Login;