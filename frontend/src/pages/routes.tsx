import Profile from "./profile";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from "./signup";
import ChatRoom from "./chatroom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/">
          <p>you logged in!</p>
        </Route>
        <Route path="/profile" >
          <Profile />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/chat">
          <ChatRoom />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  )
}
export default Routes;