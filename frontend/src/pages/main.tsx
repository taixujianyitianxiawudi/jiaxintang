import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Logout from "../components/logout";
import Develop from "./develop";
import Profile from "./profile";
import Routes from "./routes";
import Welcome from "./welcome";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="max-h-screen static">

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
            <Link to="/develop">develop</Link>
          </div>

          <div className="nav-item">
            <Logout />
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <Welcome />
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
            <Route path="/develop">
              <Develop />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
