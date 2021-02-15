import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../store/AuthContext';

import MyProfileSettings from '../../components/MyProfileSettings/MyProfileSettings';
import MyProfileInfo from '../../components/MyProfileInfo/MyProfileInfo';
import { PageContainer, Aside, Main } from '../StyledPages/StyledPages';

function Profile() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [video, setVideo] = useState('');
  const [videoStartMin, setVideoStartMin] = useState(0);
  const [videoStartSec, setVideoStartSec] = useState(0);
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [mainInstrument, setMainInstrument] = useState('');
  const [sideInstrument, setSideInstrument] = useState('');
  const [youtubeAccount, setYoutubeAccount] = useState('');
  const [twitterUsername, setTwitterUsername] = useState('');
  const [facebookAccount, setFacebookAccount] = useState('');
  const [instagramAccount, setInstagramAccount] = useState('');
  const [mainGenre, setMainGenre] = useState('');
  const [sideGenre, setSideGenre] = useState('');
  const [influences, setInfluences] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);
  const [bands, setBands] = useState('');
  const [lookingFor, setLookingFor] = useState('Collaboration');
  const [isProducer, setIsProducer] = useState(false);
  const [premiumAccount, setPremiumAccount] = useState(false);

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
        setName(data.name || '');
        setProfilePicture(data.profilePicture || null);
        if (data.profilePicture === undefined) {
          setProfilePicture(
            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          );
        }
        setVideo(data.video || '');
        setVideoStartMin(data.videoStartMin || 0);
        setVideoStartSec(data.videoStartSec || 0);
        setEmail(data.email || '');
        setDescription(data.description || '');
        setCity(data.city || '');
        setMainInstrument(data.mainInstrument || '');
        setSideInstrument(data.sideInstrument || '');
        setYoutubeAccount(data.youtubeAccount || '');
        setTwitterUsername(data.twitterUsername || '');
        setFacebookAccount(data.facebookAccount || '');
        setInstagramAccount(data.instagramAccount || '');
        setMainGenre(data.mainGenre || '');
        setSideGenre(data.sideGenre || '');
        setInfluences(data.influences || '');
        setIsProfessional(data.isProfessional || false);
        setBands(data.bands || '');
        setLookingFor(data.lookingFor || 'Collaboration');
        setIsProducer(data.isProducer || false);
        setPremiumAccount(data.premiumAccount || false);
      } catch (error) {
        localStorage.removeItem('token');
        history.push('/');
      }
    }
    load();
  }, [history]);

  const handleDelete = async (e) => {
    try {
      const token = localStorage.getItem('token');
      axios({
        method: 'DELETE',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Tu cuenta fue eliminada');
      localStorage.removeItem('token');
      logout();
      history.push('/');
    } catch (err) {
      alert('Tu cuenta no pudo ser eliminada', err);
    }
  };

  const youtubeParser = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);

    return match && match[7].length === 11 ? match[7] : false;
  };

  const youtubeId = youtubeParser(video);

  const startTime = videoStartMin * 60 + videoStartSec;
  const endTime = startTime + 15;

  return (
    <div className="profile">
      <PageContainer>
        <Aside>
          <MyProfileSettings
            email={email}
            profilePicture={profilePicture}
            premiumAccount={premiumAccount}
            handleDelete={handleDelete}
          />
        </Aside>
        <Main>
          <MyProfileInfo
            name={name}
            profilePicture={profilePicture}
            video={video}
            youtubeId={youtubeId}
            startTime={startTime}
            endTime={endTime}
            description={description}
            city={city}
            mainInstrument={mainInstrument}
            sideInstrument={sideInstrument}
            youtubeAccount={youtubeAccount}
            twitterUsername={twitterUsername}
            facebookAccount={facebookAccount}
            instagramAccount={instagramAccount}
            mainGenre={mainGenre}
            sideGenre={sideGenre}
            influences={influences}
            isProfessional={isProfessional}
            bands={bands}
            lookingFor={lookingFor}
            isProducer={isProducer}
            premiumAccount={premiumAccount}
          />
        </Main>
      </PageContainer>
    </div>
  );
}

export default Profile;
