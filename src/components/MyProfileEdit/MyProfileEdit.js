// Packages
import { useForm } from 'react-hook-form';

// Context
import { useAppContext } from '../../context/app-context';

// Services
import YouTubeService from '../../services/YouTubeService';

// Components
import HeaderRight from '../Headers/HeaderRight';
import FirstFormChildren from './FormChildren/FirstFormChildren';
import SecondFormChildren from './FormChildren/SecondFormChildren';
import ThirdFormChildren from './FormChildren/ThirdFormChildren';

// Styles
import {
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
  ButtonContainerEditInfo,
  Form,
  MyProfileContainerDiv,
  EditThumbnailContainer,
  EditThumbnail,
} from './Styles';

function MyProfileEdit({
  handleChange,
  onSubmit,
  disabled,
  handleChangeProfilePicture,
  handleSubmitProfilePicture,
}) {
  const {
    state: { userData },
  } = useAppContext();

  const { profilePicture, video } = userData;
  const { register, handleSubmit } = useForm();

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
            <form onSubmit={handleSubmitProfilePicture}>
              <label htmlFor="file">
                <MyProfileContainerDiv>
                  <EditThumbnailContainer>
                    <EditThumbnail
                      src={profilePicture}
                      alt="Profile Thumbnail"
                    />
                  </EditThumbnailContainer>
                </MyProfileContainerDiv>
              </label>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  name="file"
                  id="file"
                  onChange={handleChangeProfilePicture}
                />
                <button type="submit" value="confirmar foto perfil">
                  Subir
                </button>
              </div>
            </form>
            <Form id="edit-form" onSubmit={handleSubmit(onSubmit)}>
              <FirstFormChildren
                handleChange={handleChange}
                register={register}
              />
              <SecondFormChildren
                handleChange={handleChange}
                register={register}
              />
              <ThirdFormChildren
                handleChange={handleChange}
                register={register}
              />
            </Form>
          </InfoContainer>
        </ProfileContainer>
        <ButtonContainerEditInfo>
          <ActionButton
            form="edit-form"
            disabled={disabled}
            className="button-submit"
            id="button-submit"
            type="submit"
            value="Actualizar"
          >
            Actualizar
          </ActionButton>
        </ButtonContainerEditInfo>
      </BodyContainer>
    </ComponentContainer>
  );
}

export default MyProfileEdit;
