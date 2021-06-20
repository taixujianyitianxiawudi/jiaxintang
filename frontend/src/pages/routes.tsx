import Profile from "./profile";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ChatRoom from "./chatroom";
import RoomList from "../components/roomlist";
import UserList from "../components/userlist";
import CreateRoom from "../components/createroom";
import Logout from "../components/logout";

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
               <div>
                <Logout />
               </div>
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
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/chat/public/:roomId/:userId" exact >
            <ChatRoom />
          </Route>
          <Route path="/chat/private/:roomId/:userId" exact >
            <ChatRoom />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
