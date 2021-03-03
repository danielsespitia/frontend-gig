import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import auth from './auth';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Messages from './pages/Messages/Messages';
import MessageForm from './components/Modals/MessageForm/MessageForm';

function PrivateRoute(props) {
  const token = localStorage.getItem('token');

  if (!token) return <Redirect to="/" />;

  return <Route {...props} />;
}

function App() {
  useEffect(() => {
    async function load() {
      const token = localStorage.getItem('token');
      try {
        const {
          data: { data },
        } = await axios({
          method: 'GET',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/users/profile',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        auth.user.name = data.name;
        auth.user.email = data.email;
        auth.user.profilePicture = data.profilePicture;
        auth.user.video = data.video;
        auth.user.videoStartMin = data.videoStartMin;
        auth.user.videoStartSec = data.videoStartSec;
        auth.user.description = data.description;
        auth.user.city = data.city;
        auth.user.mainInstrument = data.mainInstrument;
        auth.user.sideInstrument = data.sideInstrument;
        auth.user.youtubeAccount = data.youtubeAccount;
        auth.user.twitterUsername = data.twitterUsername;
        auth.user.facebookAccount = data.facebookAccount;
        auth.user.instagramAccount = data.instagramAccount;
        auth.user.mainGenre = data.mainGenre;
        auth.user.sideGenre = data.sideGenre;
        auth.user.influences = data.influences;
        auth.user.isProfessional = data.isProfessional;
        auth.user.bands = data.bands;
        auth.user.lookingFor = data.lookingFor;
        auth.user.isProducer = data.isProducer;
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
    load();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            exact
            path="/app/discover/send"
            component={MessageForm}
          />
          <PrivateRoute exact path="/app/discover" component={Discover} />
          <PrivateRoute exact path="/app/profile" component={Profile} />
          <PrivateRoute
            exact
            path="/app/profile/edit"
            component={ProfileEdit}
          />
          <PrivateRoute
            exact
            path="/app/messages/:userId"
            component={Messages}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
