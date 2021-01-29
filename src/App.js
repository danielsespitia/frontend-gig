import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/app/profile" />
          </Route>
          <Route exact path="/app/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
