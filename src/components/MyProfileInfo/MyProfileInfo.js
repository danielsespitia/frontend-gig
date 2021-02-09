import styled from "styled-components";

import HeaderRight from "../Headers/HeaderRight";

import {
  ActionButtonContainer,
  ActionButton,
} from "../../pages/StyledPages/StyledPages";

import {
  ComponentContainer,
  BodyContainer,
  ProfileContainer,
  VideoContainer,
  VideoPlaceholder,
  InfoContainer,
  ButtonContainer,
} from "../StyledComponents/StyledCard";

const MyProfileInfoContainer = styled(ComponentContainer)``;

function MyProfileInfo({ video, youtubeId, startTime, endTime }) {
  return (
    <MyProfileInfoContainer>
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
        <ButtonContainer>
          <a href="/app/profile/edit">
            <ActionButtonContainer>
              <ActionButton>Editar Perfil</ActionButton>
            </ActionButtonContainer>
          </a>
        </ButtonContainer>
      </BodyContainer>
    </MyProfileInfoContainer>
  );
}

export default MyProfileInfo;
