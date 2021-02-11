import { useState } from "react";
import Modal from "react-modal";

import styled from "styled-components";

import HeaderRight from "../Headers/HeaderRight";
import SendMessageModal from "../../pages/Discover/SendMessageModal/SendMessageModal";
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

export const ModalHeader = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
`;

export const SendUserContainer = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const To = styled.h3`
  font-weight: normal;
  align-self: center;
`;

export const ThumbnailContainer = styled.div`
  display: inherit;
  justify-content: center;
  border-radius: 50px;
`;

export const Thumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
`;

export const SendUserName = styled.p`
  margin-left: 5px;
`;

export const CloseModalButton = styled.div`
  display: inherit;
  align-self: flex-start;
`;

export const CloseButton = styled.img`
  opacity: 0.5;
  height: 18px;
  cursor: pointer;
`;

function ProfileList({ dataArray, youtubeParser, handleNext, index }) {
  const [showSendMessageModal, setShowSendMessageModal] = useState(false);

  const {
    _id,
    name,
    profilePicture,
    video,
    videoStartMin,
    videoStartSec,
  } = dataArray[index];

  const startTime = videoStartMin * 60 + videoStartSec;
  const endTime = startTime + 15;

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
                src={`https://www.youtube.com/embed/${youtubeParser(
                  video
                )}?autoplay=1&start=${startTime}&end=${endTime}`}
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
            <p>{name}</p>
          </InfoContainer>
        </ProfileContainer>
        <ButtonsContainer>
          <SingleButtonContainer>
            <button onClick={() => setShowSendMessageModal(true)}>
              Enviar Mensaje
            </button>
          </SingleButtonContainer>
          <Modal
            isOpen={showSendMessageModal}
            shouldReturnFocusAfterClose={false}
            onRequestClose={() => setShowSendMessageModal(false)}
            style={{
              overlay: {
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
              },
              content: {
                margin: "auto",
                height: "30%",
                width: "30%",
                borderRadius: "10px",
              },
            }}
          >
            <ModalHeader>
              <To>
                Para:
                <SendUserContainer>
                  <ThumbnailContainer>
                    <Thumbnail src={profilePicture} alt="user thumbnail" />
                  </ThumbnailContainer>
                  <SendUserName>
                    {" "}
                    <strong>{name}</strong>
                  </SendUserName>
                </SendUserContainer>
              </To>
              <CloseModalButton>
                <CloseButton
                  src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                  onClick={() => setShowSendMessageModal(false)}
                ></CloseButton>
              </CloseModalButton>
            </ModalHeader>
            <SendMessageModal id={_id} />
          </Modal>
          <SingleButtonContainer>
            <button onClick={handleNext}>Siguiente</button>
          </SingleButtonContainer>
        </ButtonsContainer>
      </BodyContainer>
    </ProfileListContainer>
  );
}

export default ProfileList;
