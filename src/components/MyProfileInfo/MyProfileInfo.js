import YouTubeService from '../../services/YouTubeService';

import HeaderRight from '../Headers/HeaderRight';

import {
  ActionButtonContainer,
  ActionButton,
  videoPlaceholder,
} from '../../pages/StyledPages/StyledPages';

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
  ButtonContainerEditInfo,
  A,
  Icon,
  P,
  FirstTextContainer,
} from './Styles';

function MyProfileInfo({
  video,
  youtubeId,
  startTime,
  endTime,
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
}) {
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
                    <strong>Perfil de Músico:</strong> Profesional
                  </P>
                ) : (
                  <P>
                    {' '}
                    <strong>Perfil de Músico:</strong> Empírico
                  </P>
                )}
                {isProducer ? (
                  <P>
                    <strong>Productor:</strong> Sí
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
                  <strong>Otros géneros:</strong> {sideGenre}
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
        <ButtonContainerEditInfo>
          <a href="/app/profile/edit">
            <ActionButtonContainer>
              <ActionButton color="primary">Editar Perfil</ActionButton>
            </ActionButtonContainer>
          </a>
        </ButtonContainerEditInfo>
      </BodyContainer>
    </ComponentContainer>
  );
}

export default MyProfileInfo;
