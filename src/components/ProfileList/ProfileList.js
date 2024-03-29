// Packages
import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

// Components
import HeaderRight from '../Headers/HeaderRight';
import ProfileListChild from './ProfileListChildren/ProfileListChild';
import SendMessageModal from '../../pages/Discover/SendMessageModal/SendMessageModal';

// Services
import YouTubeService from '../../services/YouTubeService';

// Utils
import { startTimeGen, endTimeGen, youtubeParser } from '../../utils';

// Styles
import {
  ComponentContainer,
  BodyContainer,
  ProfileContainer,
  VideoContainer,
  VideoPlaceholder,
  InfoContainer,
} from '../StyledComponents/StyledCard';
import {
  ButtonsContainer,
  MessageButtonContainer,
  MessageButton,
  sendMessageModalStyles,
  ModalHeader,
  To,
  SendUserContainer,
  ModalThumbnailContainer,
  Thumbnail,
  SendUserName,
  CloseModalButton,
  CloseButton,
  NextButtonContainer,
  NextButton,
} from './Styles';
import { videoPlaceholder } from '../../pages/StyledPages/StyledPages';

function ProfileList({ dataArray, handleNext, index }) {
  const [showSendMessageModal, setShowSendMessageModal] = useState(false);

  const currentProfile = dataArray[index];
  const { _id, video, videoStartMin, videoStartSec, profilePicture, name } =
    currentProfile;

  const onSubmit = async (data) => {
    setShowSendMessageModal(false);
    const { messageBody } = data;
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/messages/${_id}`,
        data: {
          messageBody,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Mensaje enviado!');
    } catch (err) {
      alert('No se pudo enviar tu mensaje');
    }
  };

  const youtubeId = youtubeParser(video);
  const startTime = startTimeGen(videoStartMin, videoStartSec);
  const endTime = endTimeGen(startTime);

  return (
    <ComponentContainer>
      <HeaderRight />
      <BodyContainer>
        <ProfileContainer>
          <VideoContainer>
            {video ? (
              <YouTubeService
                youtubeId={youtubeId}
                startTime={startTime}
                endTime={endTime}
              />
            ) : (
              <VideoPlaceholder src={videoPlaceholder} alt="videoPlaceholder" />
            )}
          </VideoContainer>
          <InfoContainer>
            <ProfileListChild {...currentProfile} />
          </InfoContainer>
        </ProfileContainer>
        <ButtonsContainer>
          <MessageButtonContainer>
            <MessageButton
              src="https://res.cloudinary.com/danielsespitia/image/upload/v1613028616/User-ProfilePicture/iconos_Mesa_de_trabajo_1_copy_e9cgx0.png"
              onClick={() => setShowSendMessageModal(true)}
            />
          </MessageButtonContainer>
          <Modal
            isOpen={showSendMessageModal}
            onRequestClose={() => setShowSendMessageModal(false)}
            style={sendMessageModalStyles}
          >
            <ModalHeader>
              <To>
                Para:
                <SendUserContainer>
                  <ModalThumbnailContainer>
                    <Thumbnail src={profilePicture} alt="user thumbnail" />
                  </ModalThumbnailContainer>
                  <SendUserName>
                    {' '}
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
            <SendMessageModal id={_id} onSubmit={onSubmit} />
          </Modal>
          <NextButtonContainer>
            <NextButton
              src="https://res.cloudinary.com/danielsespitia/image/upload/v1613028638/User-ProfilePicture/iconos-03_sc7dh8.png"
              alt="message-button"
              onClick={handleNext}
            />
          </NextButtonContainer>
        </ButtonsContainer>
      </BodyContainer>
    </ComponentContainer>
  );
}

export default ProfileList;
