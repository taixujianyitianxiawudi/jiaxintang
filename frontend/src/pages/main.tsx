import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Logout from "../components/logout";
import Profile from "./profile";
import Routes from "./routes";

const Main:React.FC = () => {
  return (
    <BrowserRouter>
    <div >
        <div>
      <Link to="/">
        main  
      </Link>
        </div>
        <div>
      <Link to="/profile">
        profile  
      </Link>
      </div>

      <div>
      <Link to="/chat">
        chat  
      </Link>
      </div>

      <div>
      <Link to="/invitations">
        invitations  
      </Link>
      </div>

      <div>
      <Link to="/search">
        search  
      </Link>
      </div>

      <div>
      <Logout />
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
  )
}

export default Main;