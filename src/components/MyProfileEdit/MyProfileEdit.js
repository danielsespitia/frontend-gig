import { useForm } from 'react-hook-form';
import HeaderRight from '../Headers/HeaderRight';

import YouTubeService from '../../services/YouTubeService';

import FirstFormChildren from './FormChildren/FirstFormChildren';
import SecondFormChildren from './FormChildren/SecondFormChildren';
import ThirdFormChildren from './FormChildren/ThirdFormChildren';

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
  name,
  profilePicture,
  video,
  videoStartMin,
  videoStartSec,
  youtubeId,
  startTime,
  endTime,
  email,
  description,
  city,
  mainInstrument,
  sideInstrument,
  youtubeAccount,
  twitterUsername,
  facebookAccount,
  instagramAccount,
  mainGenre,
  sideGenre,
  influences,
  isProfessional,
  bands,
  lookingFor,
  isProducer,
  handleChange,
  onSubmit,
  disabled,
  handleChangeProfilePicture,
  handleSubmitProfilePicture,
}) {
  const { register, handleSubmit } = useForm();

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
                name={name}
                video={video}
                videoStartMin={videoStartMin}
                videoStartSec={videoStartSec}
                mainInstrument={mainInstrument}
                handleChange={handleChange}
                register={register}
              />
              <SecondFormChildren
                sideInstrument={sideInstrument}
                lookingFor={lookingFor}
                email={email}
                city={city}
                description={description}
                isProducer={isProducer}
                isProfessional={isProfessional}
                handleChange={handleChange}
                register={register}
              />
              <ThirdFormChildren
                mainGenre={mainGenre}
                sideGenre={sideGenre}
                influences={influences}
                bands={bands}
                youtubeAccount={youtubeAccount}
                twitterUsername={twitterUsername}
                facebookAccount={facebookAccount}
                instagramAccount={instagramAccount}
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
