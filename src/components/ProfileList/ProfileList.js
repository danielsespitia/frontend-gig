import { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import styled from 'styled-components';

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
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px;
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

export const MessageButtonContainer = styled.div`
  display: inherit;
  margin-left: 10px;
  margin-right: 10px;
  height: 100px;
`;

export const MessageButton = styled.img`
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
  height: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NextButtonContainer = styled.div`
  display: inherit;
  margin-left: 5px;
  margin-right: 5px;
  background-color: white;
  border-radius: 50%;
  height: 80px;
`;

export const NextButton = styled(MessageButton)`
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
`;

export const FirstCard = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditThumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const FirstTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const DataItem = styled.div`
  grid-row-gap: 5px;
`;

export const NameCity = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const RolGenre = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  align-items: flex-end;
`;

export const Name = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const H3 = styled.h3`
  padding-bottom: 1px;
  font-size: 16px;
  opacity: 0.5;
  margin: 0;
  margin-left: 5px;
`;

export const H32 = styled.h3`
  font-size: 16px;
  opacity: 0.5;
  margin: 0;
`;

export const H322 = styled.h3`
  font-size: 14px;
  opacity: 0.4;
  margin: 0;
  padding-bottom: 1px;
  margin-left: 4px;
`;

export const H33 = styled.h3`
  font-size: 14px;
  opacity: 0.5;
  margin: 0;
`;

export const P = styled.p`
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const A = styled.a`
  height: 50px;
  width: 50px;
  margin: 0;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

export const SecondCard = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubInfoContainer = styled.div`
  display: flex;
  max-width: 280px;
  flex-direction: column;
`;

export const SocialContainer = styled(SubInfoContainer)`
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  display: inherit;
  justify-content: center;
`;

export const ThumbnailContainer = styled.div`
  display: inherit;
  height: 150px;
  width: 150px;
  justify-content: center;
  border-radius: 50px;
`;

export const ModalThumbnailContainer = styled.div`
  display: inherit;
  height: 50px;
  width: 50px;
  justify-content: center;
  border-radius: 50px;
`;

export const Thumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const ThirdCard = styled(SecondCard)`
  border-bottom: 0px solid grey;
`;

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
            style={{
              overlay: {
                background:
                  'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
              },
              content: {
                margin: 'auto',
                height: '268px',
                width: '383px',
                borderRadius: '10px',
              },
            }}
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
    </ProfileListContainer>
  );
}

export default ProfileList;
