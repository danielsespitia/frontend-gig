// Styles
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
        <MyProfileAnchor href="/app/profile/">Mi Perfil</MyProfileAnchor>
      </HeaderContainer>
    </InAppHeader>
  );
}

export default HeaderLeft;
