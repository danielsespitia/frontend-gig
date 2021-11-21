// Packages
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Components
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Messages from './pages/Messages/Messages';
import MessageForm from './components/Modals/MessageForm/MessageForm';

// Styles
import './App.css';

function PrivateRoute(props) {
  const token = localStorage.getItem('token');

  if (!token) return <Redirect to="/" />;

  return <Route {...props} />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/app/discover" component={Discover} />
          <PrivateRoute exact path="/app/profile" component={Profile} />
          <PrivateRoute
            exact
            path="/app/profile/edit"
            component={ProfileEdit}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
