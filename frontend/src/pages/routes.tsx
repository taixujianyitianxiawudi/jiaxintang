import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatRoom from "./chatroom";
import RoomList from "../components/roomlist";
import UserList from "../components/userlist";
import CreateRoom from "../components/createroom";
import { useState } from "react";
import { UserOrRoomVar } from "../cache";
import { gql, useQuery } from "@apollo/client";

const USER_OR_ROOM = gql`
  query UserOrRoom {
    UserOrRoom @client
  }
`;




const Routes: React.FC = () => {
  //const [UserorRoom, setUserorRoom] = useState(UserOrRoom);
  const { data } = useQuery(USER_OR_ROOM);
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route path="/chat/public/:roomId/:userId" exact>
              <ChatRoom />
            </Route>
            <Route path="/chat/private/:roomId/:userId" exact>
              <ChatRoom />
            </Route>
          </Switch>
        </div>
        <div>{data.UserOrRoom ? <UserList /> : <RoomList />}</div>
        <button onClick={(e) => {
          UserOrRoomVar(false);
          localStorage.setItem("place","false")
          }}>
          click me to room list!
        </button>
        <button onClick={(e) => {
          UserOrRoomVar(true);
          localStorage.setItem("place","true")
          }}>
          click me to user list!
        </button>
        <div>
          create new room here~
          <CreateRoom />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Routes;
