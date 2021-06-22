import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatRoom from "./chatroom";
import RoomList from "../components/roomlist";
import UserList from "../components/userlist";
import CreateRoom from "../components/createroom";
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
      <div className="grid grid-rows-5 grid-flow-col gap-4">
        <div className="row-span-5">
          create new room here~
          <CreateRoom />
        </div>
        <div className="row-span-5 col-span-5">
          <Switch>
            <Route path="/chat/public/:roomId/:userId" exact>
              <ChatRoom />
            </Route>
            <Route path="/chat/private/:roomId/:userId" exact>
              <ChatRoom />
            </Route>
          </Switch>
        </div>
        <div className="col-span-1 row-span-5">
          <button
          className="button-primary"
            onClick={(e) => {
              UserOrRoomVar(false);
              localStorage.setItem("place", "false");
            }}
          >
            click me to room list!
          </button>
          <button
          className="button-primary"
            onClick={(e) => {
              UserOrRoomVar(true);
              localStorage.setItem("place", "true");
            }}
          >
            click me to user list!
          </button>
          <div className="overflow-auto max-h-full max-w-sm">{data.UserOrRoom ? <RoomList /> : <UserList /> }</div>
        </div>
        

      </div>
    </BrowserRouter>
  );
};
export default Routes;
