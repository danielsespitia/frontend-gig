import styled from "styled-components";

import HeaderRight from "../Headers/HeaderRight";

import {
  ComponentContainer,
  BodyContainer,
  ProfileContainer,
  VideoContainer,
  VideoPlaceholder,
  InfoContainer,
} from "../StyledComponents/StyledCard";

export const ProfileListContainer = styled(ComponentContainer)``;

export const ButtonsContainer = styled.div`
  display: inherit;
  flex-direction: row;
  margin: 20px;
`;

export const SingleButtonContainer = styled.div`
  display: inherit;
  margin-left: 5px;
  margin-right: 5px;
`;

function ProfileList({ video, youtubeId, startTime, endTime }) {
  return (
    <ProfileListContainer>
      <HeaderRight />
      <BodyContainer>
        <ProfileContainer>
          <VideoContainer>
            {video ? (
              <iframe
                title="userVideo"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&end=${endTime}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <VideoPlaceholder
                src="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
                alt="videoPlaceholder"
              />
            )}
          </VideoContainer>
          <InfoContainer></InfoContainer>
        </ProfileContainer>
        <ButtonsContainer>
          <SingleButtonContainer>
            <button>Siguiente</button>
          </SingleButtonContainer>
          <SingleButtonContainer>
            <button>Enviar Mensaje</button>
          </SingleButtonContainer>
          <SingleButtonContainer>
            <button>Reportar</button>
          </SingleButtonContainer>
        </ButtonsContainer>
      </BodyContainer>
    </ProfileListContainer>
  );
}

export default ProfileList;
