import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Logout from "../components/logout";
import Profile from "./profile";
import Routes from "./routes";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="nav-bar flex">
          <div className="nav-item">
            <Link to="/">main</Link>
          </div>
          <div className="nav-item">
            <Link to="/profile">profile</Link>
          </div>

          <div className="nav-item">
            <Link to="/chat">chat</Link>
          </div>

          <div className="nav-item">
            <Link to="/invitations">invitations</Link>
          </div>

          <div className="nav-item">
            <Link to="/search">search</Link>
          </div>

          <div className="nav-item">
            <Logout />
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <div>welcome page</div>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/chat">
              <Routes />
            </Route>
            <Route path="/invitations">
              <div>invitations</div>
            </Route>
            <Route path="/search">
              <div>search</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
