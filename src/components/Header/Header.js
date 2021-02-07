import styled from "styled-components";

export const InAppHeader = styled.header`
  width: 100%;
  display: inherit;
  height: 60px;
  justify-content: flex-start;
  background: linear-gradient(
    90deg,
    rgba(13, 231, 208, 1) 0%,
    rgba(110, 47, 200, 1) 100%
  );
  color: white;
  box-shadow: 0 1px 8px 0 rgba(0, 17, 25, 0.27);
`;

export const HeaderContainer = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ThumbnailContainer = styled.div`
  display: inherit;
  align-items: center;
  height: 36px;
  width: 36px;
`;

export const ProfilePicture = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 2px;
  border-color: white;
  border-style: solid;
`;

export const MyProfileAnchor = styled.h2`
  margin-left: 10px;
`;

function Header() {
  return (
    <InAppHeader>
      <HeaderContainer>
        <ThumbnailContainer>
          <ProfilePicture
            src="https://i.pinimg.com/originals/20/4a/c2/204ac2d176b028b2a40638fb7f61039b.jpg"
            alt="Profle Thumbnail"
          />
        </ThumbnailContainer>
        <MyProfileAnchor>Mi Perfil</MyProfileAnchor>
      </HeaderContainer>
    </InAppHeader>
  );
}

export default Header;
