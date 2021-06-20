import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Logout from "../components/logout";
import Profile from "./profile";
import Routes from "./routes";

const Main:React.FC = () => {
  return (
    <BrowserRouter>
    <div>

      <Link to="/">
        main  
      </Link>

      <Link to="/profile">
        profile  
      </Link>
      <Link to="/chat">
        chat  
      </Link>
      <Link to="/invitations">
        invitations  
      </Link>
      <Link to="/search">
        search  
      </Link>
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
    </BrowserRouter>
  )
}

export default Main;