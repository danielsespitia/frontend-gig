import { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../store/AuthContext';
import auth from '../../auth';

import MyProfileSettings from '../../components/MyProfileSettings/MyProfileSettings';
import MyProfileInfo from '../../components/MyProfileInfo/MyProfileInfo';
import { PageContainer, Aside, Main } from '../StyledPages/StyledPages';

function Profile() {
  useLocation();

  const {
    user: {
      name,
      email,
      video,
      profilePicture,
      videoStartMin,
      videoStartSec,
      description,
      city,
      mainInstrument,
      sideInstrument,
      youtubeAccount,
      twitterUsername,
      facebookAccount,
      instagramAccount,
      mainGenre,
      sideGenre,
      influences,
      isProfessional,
      bands,
      lookingFor,
      isProducer,
      premiumAccount,
    },
  } = auth;

  const { logout } = useContext(AuthContext);
  const history = useHistory();

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
