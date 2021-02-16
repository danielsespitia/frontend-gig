import styled from 'styled-components';

import HeaderRight from '../Headers/HeaderRight';

import {
  ActionButtonContainer,
  ActionButton,
} from '../../pages/StyledPages/StyledPages';

import {
  ComponentContainer,
  BodyContainer,
  ProfileContainer,
  VideoContainer,
  VideoPlaceholder,
  InfoContainer,
  ButtonContainer,
} from '../StyledComponents/StyledCard';

const MyProfileInfoContainer = styled(ComponentContainer)``;

const ButtonContainerEditInfo = styled(ButtonContainer)`
  margin-top: 70px;
`;

const DataItem = styled.div`
  grid-row-gap: 5px;
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

export const EditThumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const FirstCard = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const FirstTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
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
  opacity: 0.5;
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

export const ThirdCard = styled(SecondCard)`
  border-bottom: 0px solid grey;
`;

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
                src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&end=${endTime}&autoplay=1`}
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
    </MyProfileInfoContainer>
  );
}

export default MyProfileInfo;
