// Packages
import styled from 'styled-components';

export const InAppHeader = styled.header`
  width: 100%;
  display: inherit;
  height: 60px;
  justify-content: flex-start;
  background: linear-gradient(
    90deg,
    rgba(23, 205, 212, 1) 0%,
    rgba(130, 98, 199, 1) 100%
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
  font-size: 9px;
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-width: 2px;
  border-color: white;
  border-style: solid;
`;

export const MyProfileAnchor = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-left: 15px;
`;
