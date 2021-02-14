import styled from 'styled-components';

export const ComponentContainer = styled.div`
  display: inherit;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const BodyContainer = styled.div`
  display: inherit;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  border-radius: 4px;
  display: inherit;
  flex-direction: column;
  background-color: white;
  width: 560px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`;

export const VideoContainer = styled.div`
  display: inherit;
`;

export const VideoPlaceholder = styled.img`
  border-radius: 4px;
  width: 560px;
  height: 315px;
`;

export const InfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  margin: 10px;
  height: 240px;
  overflow: auto;
`;

export const ButtonContainer = styled.div`
  margin: 20px;
`;
