// Packages
import { Link } from 'react-router-dom';

// Context
import { useAppContext } from '../../context/app-context';

// Components
import HeaderRight from '../Headers/HeaderRight';
import ProfileInfoChild from './Children/ProfileInfoChild';

// Services
import YouTubeService from '../../services/YouTubeService';

// Utils
import { startTimeGen, endTimeGen, youtubeParser } from '../../utils';

// Styles
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

function MyProfileInfo() {
  const {
    state: { userData },
  } = useAppContext();
  const { video, videoStartMin, videoStartSec } = userData;

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
            <ProfileInfoChild />
          </InfoContainer>
        </ProfileContainer>
        <ButtonContainerEditInfo>
          <Link to="/app/profile/edit">
            <ActionButtonContainer>
              <ActionButton color="primary">Editar Perfil</ActionButton>
            </ActionButtonContainer>
          </Link>
        </ButtonContainerEditInfo>
      </BodyContainer>
    </ComponentContainer>
  );
}

export default MyProfileInfo;
