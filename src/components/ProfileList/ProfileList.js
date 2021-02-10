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

export const BodySeveralCards = styled(BodyContainer)`
  display: inherit;
  justify-content: flex-start;
`;

export const ProfileListContainer = styled(ComponentContainer)`
  display: inherit;
`;

export const MapRenderer = styled.div`
  display: flex;
  margin-top: 6.1rem;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: inherit;
  justify-content: center;
  flex-direction: row;
  margin: 20px;
`;

export const SingleButtonContainer = styled.div`
  display: inherit;
  margin-left: 5px;
  margin-right: 5px;
`;

function ProfileList({
  dataArray,
  youtubeParser,
  index,
  handleNext,
}) {

  const current = dataArray[index];

  return (
    <ProfileListContainer>
      <HeaderRight />
      <BodySeveralCards>
        {!!dataArray &&
          dataArray.length > 0 &&
          dataArray.map(
            ({
              _id,
              name,
              video,
              videoStartMin,
              videoStartSec,
              videoEndMin,
              videoEndSec,
            }) => {
              return (
                <MapRenderer key={_id}>
                  <ProfileContainer>
                    <VideoContainer>
                      {video ? (
                        <iframe
                          title="userVideo"
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${youtubeParser(
                            video
                          )}?start=${videoStartMin * 60 + videoStartSec}&end=${
                            videoEndMin * 60 + videoEndSec
                          }`}
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
                    <InfoContainer>
                      <p>Nombre {name}</p>
                    </InfoContainer>
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
                </MapRenderer>
              );
            }
          )}
      </BodySeveralCards>
    </ProfileListContainer>
  );
}

export default ProfileList;
