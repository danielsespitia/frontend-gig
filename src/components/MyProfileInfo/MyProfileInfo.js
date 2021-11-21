// Packages
import { useAppContext } from '../../context/app-context';

// Components
import HeaderRight from '../Headers/HeaderRight';
import ProfileInfoChild from './Children/ProfileInfoChild';

// Services
import YouTubeService from '../../services/YouTubeService';

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
  const { video } = userData;

  return (
    <ComponentContainer>
      <HeaderRight />
      <BodyContainer>
        <ProfileContainer>
          <VideoContainer>
            {video ? (
              <YouTubeService />
            ) : (
              <VideoPlaceholder src={videoPlaceholder} alt="videoPlaceholder" />
            )}
          </VideoContainer>
          <InfoContainer>
            <ProfileInfoChild />
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
