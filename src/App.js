import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home"
import Discover from "./pages/Discover/Discover";
import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit";
import Messages from "./pages/Messages/Messages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app/discover" component={Discover} />
          <Route exact path="/app/profile" component={Profile} />
          <Route exact path="/app/profile/edit" component={ProfileEdit} />
          <Route exact path="/app/messages/" component={Messages} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
