import { useForm } from 'react-hook-form';
import HeaderRight from '../Headers/HeaderRight';

import styled from 'styled-components';

import {
  ComponentContainer,
  BodyContainer,
  ProfileContainer,
  VideoContainer,
  VideoPlaceholder,
  InfoContainer,
  ButtonContainer,
} from '../StyledComponents/StyledCard';

import { ActionButton } from '../../pages/StyledPages/StyledPages';

const MyProfileEditContainer = styled(ComponentContainer)``;

const ButtonContainerEditInfo = styled(ButtonContainer)`
  margin-top: 70px;
`;

export const Form = styled.form`
  display: inherit;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-self: center;
`;

export const MyProfileContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const EditThumbnailContainer = styled.div`
  height: 80px;
  width: 80px;
`;

export const EditThumbnail = styled.img`
  justify-self: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const VideoFragmentContainer = styled.div`
  display: inherit;
`;

export const VideoStartContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const StartTimestampContainer = styled.div`
  display: inherit;
  flex-direction: row;
`;

export const VideoEndContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const EndTimestampContainer = styled.div`
  display: inherit;
  flex-direction: row;
`;

export const Label = styled.label`
  display: inherit;
`;

export const Input = styled.input`
  display: inherit;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.5);
  width: 85%;
`;

export const TextArea = styled.textarea`
  display: inherit;
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.5);
  width: 85%;
`;

export const Select = styled.select`
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: #ffffff;
  color: #6c757d;
`;

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
    <MyProfileEditContainer>
      <HeaderRight />
      <BodyContainer>
        <ProfileContainer>
          <VideoContainer>
            {video ? (
              <iframe
                title="userVideo"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&end=${endTime}`}
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
              <div>
                <Label>
                  <strong>Nombre:</strong>
                </Label>
                <Input
                  className="name-input"
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                  required
                />
              </div>
              <div>
                <Label>
                  <strong>Video:</strong>
                </Label>
                <p>
                  <em>
                    Copia la URL de YouTube donde este tu mejor ejecucion, este
                    video sera lo primero que vean los demas miembros de GIG en
                    tu perfil
                  </em>
                </p>
                <Input
                  className="video-input"
                  id="video"
                  type="url"
                  name="video"
                  value={video}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                  required
                />
              </div>
              <p>
                <em>
                  Tendras 15 segundos para ensenar tus habilidades, escribe a
                  continuacion el minuto y segundo donde quieres que inicie tu
                  video introductorio.
                </em>
              </p>
              <VideoStartContainer>
                <StartTimestampContainer>
                  <div>
                    <Label>
                      <strong>Minuto:</strong>
                    </Label>
                    <Input
                      className="videoStartMin-input"
                      id="videoStartMin"
                      type="number"
                      name="videoStartMin"
                      min="0"
                      max="5"
                      step="1"
                      value={videoStartMin}
                      onChange={handleChange}
                      ref={register}
                      required
                    />
                  </div>
                  <div>
                    <Label>
                      <strong>Segundo:</strong>
                    </Label>
                    <Input
                      className="videoStartSec-input"
                      id="videoStartSec"
                      type="number"
                      name="videoStartSec"
                      min="0"
                      max="60"
                      step="1"
                      value={videoStartSec}
                      onChange={handleChange}
                      ref={register}
                      required
                    />
                  </div>
                </StartTimestampContainer>
              </VideoStartContainer>
              <div>
                <Label className="mainInstrument-label">
                  <strong>Rol Principal:</strong>
                </Label>
                <Select
                  id="mainInstrument"
                  name="mainInstrument"
                  value={mainInstrument}
                  onChange={handleChange}
                  ref={register}
                  required
                >
                  <option value="Guitarrista">Guitarrista</option>
                  <option value="Bajista">Bajista</option>
                  <option value="Baterista">Baterista</option>
                  <option value="Vocalista">Vocalista</option>
                  <option value="Pianista">Pianista</option>
                  <option value="Diseñador Sonoro">Diseñador Sonoro</option>
                  <option value="Beat Maker">Beat Maker</option>
                </Select>
              </div>
              <div>
                <Label className="sideInstrument-label">
                  <strong>Rol Secundario:</strong>
                </Label>
                <Select
                  id="sideInstrument"
                  name="sideInstrument"
                  value={sideInstrument}
                  onChange={handleChange}
                  ref={register}
                >
                  <option value="Ninguno">Ninguno</option>
                  <option value="Guitarrista">Guitarrista</option>
                  <option value="Bajista">Bajista</option>
                  <option value="Baterista">Baterista</option>
                  <option value="Vocalista">Vocalista</option>
                  <option value="Pianista">Pianista</option>
                  <option value="Diseñador Sonoro">Diseñador Sonoro</option>
                  <option value="Beat Maker">Beat Maker</option>
                  <option value="Ingeniero de Mezcla">
                    Ingeniero de Mezcla
                  </option>
                </Select>
              </div>
              <div>
                <Label className="lookingFor-label">
                  <strong>Estoy buscando:</strong>
                </Label>
                <Select
                  id="lookingFor"
                  name="lookingFor"
                  value={lookingFor}
                  onChange={handleChange}
                  ref={register}
                  required
                >
                  <option value="Colaborar">Colaborar</option>
                  <option value="Musico de Sesion">Musico de Sesion</option>
                  <option value="Crear Banda">Crear Banda</option>
                  <option value="Completar Banda">Completar Banda</option>
                  <option value="Productor">Productor</option>
                  <option value="Ingeniero de Mezcla">
                    Ingeniero de Mezcla
                  </option>
                </Select>
              </div>
              <div>
                <Label>
                  <strong>Correo Electrónico:</strong>
                </Label>
                <Input
                  className="email-input"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                  required
                />
              </div>
              <div>
                <Label>
                  <strong>Ciudad:</strong>
                </Label>
                <Input
                  className="city-input"
                  id="city"
                  type="text"
                  name="city"
                  value={city}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                  required
                />
              </div>
              <div>
                <Label>
                  <strong>Descripcion:</strong>
                </Label>
                <TextArea
                  className="description-input"
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  ref={register}
                />
              </div>
              <div>
                <Label className="isProducer-label">
                  <strong>Productor:</strong>
                </Label>
                <Select
                  id="isProducer"
                  name="isProducer"
                  value={isProducer}
                  onChange={handleChange}
                  ref={register}
                >
                  <option value={'false'}>No</option>
                  <option value="true">Si</option>
                </Select>
              </div>
              <div>
                <Label className="isProfessional-label">
                  <strong>Perfil de Musico:</strong>
                </Label>
                <Select
                  id="isProfessional"
                  name="isProfessional"
                  value={isProfessional}
                  onChange={handleChange}
                  ref={register}
                >
                  <option value="false">Empirico</option>
                  <option value="true">Profesional</option>
                </Select>
              </div>
              <div>
                <Label className="mainGenre-label">
                  <strong>Genero Principal:</strong>
                </Label>
                <Select
                  id="mainGenre"
                  name="mainGenre"
                  value={mainGenre}
                  onChange={handleChange}
                  ref={register}
                  required
                >
                  <option value="Rock">Rock</option>
                  <option value="Metal">Metal</option>
                  <option value="EDM">EDM</option>
                  <option value="Pop">Pop</option>
                  <option value="Balada">Balada</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Hip Hop">Hip Hop</option>
                </Select>
              </div>
              <div>
                <Label className="sideGenre-label">
                  <strong>Otro Genero:</strong>
                </Label>
                <Select
                  id="sideGenre"
                  name="sideGenre"
                  value={sideGenre}
                  onChange={handleChange}
                  ref={register}
                >
                  <option value="Rock">Rock</option>
                  <option value="Metal">Metal</option>
                  <option value="EDM">EDM</option>
                  <option value="Pop">Pop</option>
                  <option value="Balada">Balada</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Hip Hop">Hip Hop</option>
                </Select>
              </div>
              <div>
                <Label>
                  <strong>Influencias:</strong>
                </Label>
                <TextArea
                  className="influences-input"
                  id="influences"
                  name="influences"
                  value={influences}
                  onChange={handleChange}
                  ref={register}
                  required
                />
              </div>
              <div>
                <Label>
                  <strong>Mis Bandas:</strong>
                </Label>
                <TextArea
                  className="bands-input"
                  id="bands"
                  name="bands"
                  value={bands}
                  onChange={handleChange}
                  ref={register}
                />
              </div>
              <div>
                <Label>
                  <strong>Canal de YouTube:</strong>
                </Label>
                <Input
                  className="youtubeAccount-input"
                  id="youtubeAccount"
                  type="url"
                  name="youtubeAccount"
                  value={youtubeAccount}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                />
              </div>
              <div>
                <Label>
                  <strong>Twitter:</strong>
                </Label>
                <Input
                  className="twitterUsername-input"
                  id="twitterUsername"
                  type="url"
                  name="twitterUsername"
                  value={twitterUsername}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                />
              </div>
              <div>
                <Label>
                  <strong>Facebook:</strong>
                </Label>
                <Input
                  className="facebookAccount-input"
                  id="facebookAccount"
                  type="url"
                  name="facebookAccount"
                  value={facebookAccount}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                />
              </div>
              <div>
                <Label>
                  <strong>Instagram:</strong>
                </Label>
                <Input
                  className="instagramAccount-input"
                  id="instagramAccount"
                  type="url"
                  name="instagramAccount"
                  value={instagramAccount}
                  autoComplete="on"
                  onChange={handleChange}
                  ref={register}
                />
              </div>
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
    </MyProfileEditContainer>
  );
}

export default MyProfileEdit;
