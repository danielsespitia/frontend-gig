import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Profile from "./pages/profile/profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="app/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
