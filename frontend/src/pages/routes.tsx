import Profile from "./profile";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Signup from "./signup";
import ChatRoom from "./chatroom";
import RoomList from "../components/roomlist";
import UserList from "../components/userlist";
import CreateRoom from "../components/createroom";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main     You logged in!</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <div>
                this is a userlist!
                <UserList />
              </div>
              <div>
                this is a room list!
                <RoomList />
              </div>
              <div>
                create new room here~
                <CreateRoom />
              </div>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route exact path="/">
            
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/chat/:roomId">
            <ChatRoom />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
