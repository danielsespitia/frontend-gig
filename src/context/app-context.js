// Packages
import { createContext, useContext, useMemo, useReducer } from 'react';

// Assets
import { profilePicturePlaceholder } from '../pages/StyledPages/StyledPages';

const AppContext = createContext(undefined);

const initialState = {
  userData: {
    name: '',
    email: '',
    profilePicture: profilePicturePlaceholder,
    video: '',
    videoStartMin: 0,
    videoStartSec: 0,
    description: '',
    city: '',
    // TODO: Change format to instruments: {main, side}
    mainInstrument: '',
    sideInstrument: '',
    // TODO: Change format to socials: {yt, twitter, fb, instagram}
    youtubeAccount: '',
    twitterUsername: '',
    facebookAccount: '',
    instagramAccount: '',
    // TODO: Change format to genres: {main, side}
    mainGenre: '',
    sideGenre: '',
    influences: '',
    isProfessional: false,
    bands: '',
    lookingFor: 'Collaboration',
    isProducer: false,
    premiumAccount: false,
    terms: false,
  },
  isAuthenticated: false,
};

const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const SET_USER_AUTH = 'AUTHENTICATE_USER';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case SET_USER_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  const [state, dispatch] = context;

  const setUserData = (data) =>
    dispatch({ type: UPDATE_USER_DATA, payload: data });
  const setUserAuthentication = (auth) =>
    dispatch({ type: SET_USER_AUTH, payload: auth });

  return {
    state,
    dispatch,
    setUserData,
    setUserAuthentication,
  };
};

export { AppContextProvider, useAppContext };
