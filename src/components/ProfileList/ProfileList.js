import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import YouTubeService from '../../services/YouTubeService';

import HeaderRight from '../Headers/HeaderRight';
import SendMessageModal from '../../pages/Discover/SendMessageModal/SendMessageModal';
import {
  ComponentContainer,
  BodyContainer,
  ProfileContainer,
  VideoContainer,
  VideoPlaceholder,
  InfoContainer,
} from '../StyledComponents/StyledCard';

import {
  FirstCard,
  ImageContainer,
  ThumbnailContainer,
  EditThumbnail,
  DataItem,
  NameCity,
  Name,
  H3,
  RolGenre,
  H32,
  H322,
  H33,
  SecondCard,
  SubInfoContainer,
  ThirdCard,
  SocialContainer,
  A,
  Icon,
  P,
  FirstTextContainer,
} from '../MyProfileInfo/Styles';

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

function ProfileList({ dataArray, youtubeParser, handleNext, index }) {
  const [showSendMessageModal, setShowSendMessageModal] = useState(false);

  const {
    _id,
    video,
    videoStartMin,
    videoStartSec,
    profilePicture,
    name,
    city,
    mainInstrument,
    mainGenre,
    lookingFor,
    description,
    isProfessional,
    isProducer,
    influences,
    sideInstrument,
    sideGenre,
    bands,
    youtubeAccount,
    twitterUsername,
    facebookAccount,
    instagramAccount,
  } = dataArray[index];

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

  const startTime = videoStartMin * 60 + videoStartSec;
  const endTime = startTime + 15;

  return (
    <ComponentContainer>
      <HeaderRight />
      <BodyContainer>
        <ProfileContainer>
          <VideoContainer>
            {video ? (
              <YouTubeService
                youtubeId={youtubeParser(video)}
                startTime={startTime}
                endTime={endTime}
              />
            ) : (
              <VideoPlaceholder src={videoPlaceholder} alt="videoPlaceholder" />
            )}
          </VideoContainer>
          <InfoContainer>
            <FirstCard>
              <ImageContainer>
                <ThumbnailContainer>
                  <EditThumbnail src={profilePicture} alt="Profile Thumbnail" />
                </ThumbnailContainer>
              </ImageContainer>
              <FirstTextContainer>
                <DataItem>
                  <NameCity>
                    <Name>{name}</Name>
                    <H3>{city}</H3>
                  </NameCity>
                </DataItem>
                <RolGenre>
                  <H32>{mainInstrument}</H32>
                  <H322>{mainGenre}</H322>
                </RolGenre>
                <H33>Buscando: {lookingFor}</H33>
              </FirstTextContainer>
            </FirstCard>
            <SecondCard>
              <SubInfoContainer>
                <P>{description}</P>
                <P>
                  <strong>Influencias:</strong> {influences}
                </P>
              </SubInfoContainer>
              <SubInfoContainer>
                {isProfessional ? (
                  <P>
                    <strong>Perfil de Musico:</strong> Profesional
                  </P>
                ) : (
                  <P>
                    {' '}
                    <strong>Perfil de Musico:</strong> Empirico
                  </P>
                )}
                {isProducer ? (
                  <P>
                    <strong>Productor:</strong> Si
                  </P>
                ) : (
                  <P>
                    {' '}
                    <strong>Productor:</strong> No
                  </P>
                )}
              </SubInfoContainer>
            </SecondCard>
            <SecondCard>
              <SubInfoContainer>
                <P>
                  <strong>Otros roles: </strong> {sideInstrument}
                </P>
                <P>
                  <strong>Otros generos:</strong> {sideGenre}
                </P>
                <P>
                  <strong>Bandas: </strong> {bands}
                </P>
              </SubInfoContainer>
            </SecondCard>
            <ThirdCard>
              <SocialContainer>
                <A href={youtubeAccount}>
                  <Icon src="https://cdn.iconscout.com/icon/free/png-256/youtube-104-432560.png" />{' '}
                </A>
                <A href={twitterUsername}>
                  <Icon src="https://cdn.icon-icons.com/icons2/1183/PNG/512/1490133460-social-icons01_82210.png" />{' '}
                </A>
                <A href={facebookAccount}>
                  <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/300px-Facebook_icon_2013.svg.png" />{' '}
                </A>
                <A href={instagramAccount}>
                  {' '}
                  <Icon src="https://image.flaticon.com/icons/png/512/174/174855.png" />{' '}
                </A>
              </SocialContainer>
            </ThirdCard>
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
