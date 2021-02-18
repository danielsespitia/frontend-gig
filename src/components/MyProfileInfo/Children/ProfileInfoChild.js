import {
  youTubeLogo,
  twitterLogo,
  facebookLogo,
  instagramLogo,
} from '../../../pages/StyledPages/StyledPages';

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
} from '../Styles';

function ProfileInfoChild({
  profilePicture,
  name,
  city,
  mainInstrument,
  mainGenre,
  lookingFor,
  description,
  influences,
  isProfessional,
  isProducer,
  sideInstrument,
  sideGenre,
  bands,
  youtubeAccount,
  twitterUsername,
  facebookAccount,
  instagramAccount,
}) {
  return (
    <>
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
            <Icon src={youTubeLogo} />{' '}
          </A>
          <A href={twitterUsername}>
            <Icon src={twitterLogo} />{' '}
          </A>
          <A href={facebookAccount}>
            <Icon src={facebookLogo} />{' '}
          </A>
          <A href={instagramAccount}>
            {' '}
            <Icon src={instagramLogo} />{' '}
          </A>
        </SocialContainer>
      </ThirdCard>
    </>
  );
}

export default ProfileInfoChild;
