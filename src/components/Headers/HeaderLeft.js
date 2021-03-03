import { Link } from 'react-router-dom';

import {
  InAppHeader,
  HeaderContainer,
  ThumbnailContainer,
  ProfilePicture,
  MyProfileAnchor,
} from './HeaderLeftStyles';

function HeaderLeft({ profilePicture }) {
  return (
    <InAppHeader>
      <HeaderContainer>
        <ThumbnailContainer>
          <ProfilePicture src={profilePicture} alt="Profile Thumbnail" />
        </ThumbnailContainer>
        <Link to="/app/profile/">Mi Perfil</Link>
      </HeaderContainer>
    </InAppHeader>
  );
}

export default HeaderLeft;
