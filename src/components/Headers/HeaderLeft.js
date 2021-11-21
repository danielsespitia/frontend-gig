// Packages
import { useEffect } from 'react';
import axios from 'axios';

// Context
import { useAppContext } from '../../context/app-context';

// Styles
import {
  InAppHeader,
  HeaderContainer,
  ThumbnailContainer,
  ProfilePicture,
  MyProfileAnchor,
} from './HeaderLeftStyles';

function HeaderLeft() {
  const {
    state: { userData },
    setUserData,
  } = useAppContext();

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
        const { profilePicture } = data;
        setUserData({ ...userData, profilePicture });
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
    load();
  }, []);

  return (
    <InAppHeader>
      <HeaderContainer>
        <ThumbnailContainer>
          <ProfilePicture
            src={userData.profilePicture}
            alt="Profile Thumbnail"
          />
        </ThumbnailContainer>
        <MyProfileAnchor to="/app/profile/">Mi Perfil</MyProfileAnchor>
      </HeaderContainer>
    </InAppHeader>
  );
}

export default HeaderLeft;
