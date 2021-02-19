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

import { ButtonContainerEditInfo } from './Styles';

import ProfileInfoChild from './Children/ProfileInfoChild';

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
          <p>testtttt</p>
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
            <ProfileInfoChild
              profilePicture={profilePicture}
              name={name}
              city={city}
              mainInstrument={mainInstrument}
              mainGenre={mainGenre}
              lookingFor={lookingFor}
              description={description}
              influences={influences}
              isProfessional={isProfessional}
              isProducer={isProducer}
              sideInstrument={sideInstrument}
              sideGenre={sideGenre}
              bands={bands}
              youtubeAccount={youtubeAccount}
              twitterUsername={twitterUsername}
              facebookAccount={facebookAccount}
              instagramAccount={instagramAccount}
            />
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
