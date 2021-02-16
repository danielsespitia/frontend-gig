import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
`;

export const Aside = styled.div`
  display: inherit;
  background-color: #f5f7fa;
  justify-content: center;
  flex-basis: 25%;
  min-width: 325px;
  max-width: 375px;
  border-right: 0.5px solid lightgrey;
  border-bottom: 0.5px solid lightgrey;
`;

export const Main = styled.div`
  background-color: #f5f7fa;
  display: inherit;
  justify-content: center;
  flex: 1;
`;

export const MainActionButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 0;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(23, 205, 212, 1) 0%,
    rgba(130, 98, 199, 1) 100%
  );
  color: white;
  &:hover {
    color: #fff;
    background: linear-gradient(
      90deg,
      rgba(130, 98, 199, 1) 0%,
      rgba(23, 205, 212, 1) 100%
    );
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const ActionButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 0;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(23, 205, 212, 1) 0%,
    rgba(130, 98, 199, 1) 100%
  );
  color: white;
  &:hover {
    color: #8262c7;
    border: #8262c7 solid 1px;
    background: #fff;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const SecondaryActionButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 0;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  background: #fff;
  color: #8262c7;
  &:hover {
    color: white;
    background: linear-gradient(
      90deg,
      rgba(23, 205, 212, 1) 0%,
      rgba(130, 98, 199, 1) 100%
    );
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const ActionButtonContainer = styled.div`
  ${ActionButton}:hover & {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const gigLogo =
  'https://res.cloudinary.com/danielsespitia/image/upload/v1613019159/User-ProfilePicture/LOGO_Mesa_de_trabajo_1_tjzeqa.ico';

export const closeButtonSrc =
  'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png';

export const profilePicturePlaceholder =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export const videoPlaceholder =
  'https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg';
