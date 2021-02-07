import { useForm } from "react-hook-form";

import styled from "styled-components";

export const MyProfileEditContainer = styled.div`
  display: inherit;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const InAppHeader = styled.header`
  width: 100%;
  display: inherit;
  height: 60px;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: inherit;
`;

export const Logo = styled.img`
  opacity: 0.5;
  width: 50px;
  height: 50px;
`;

export const BodyContainer = styled.div`
  justify-content: space-between;
`;

export const ProfileContainer = styled.div`
  border-radius: 4px;
  display: inherit;
  flex-direction: column;
  background-color: lightgrey;
  width: 560px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`;

export const VideoContainer = styled.div`
  display: inherit;
`;

export const VideoPlaceholder = styled.img`
  border-radius: 4px;
  width: 560px;
  height: 315px;
`;

export const InfoContainer = styled.div`
  margin: 30px;
  display: grid;
`;

export const FormContainer = styled.div`
  display: inherit;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px 0px;
`;

export const Form = styled.form`
  display: inherit;
`;

export const Label = styled.label`
  display: block;
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

const Select = styled.select`
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: #ffffff;
  color: #6c757d;
`;

const ButtonContainer = styled.div`
  margin: 20px;
`;

function MyProfileEdit({
  name,
  video,
  videoStart,
  videoEnd,
  email,
  description,
  city,
  instruments,
  youtubeAccount,
  twitterUsername,
  facebookAccount,
  instagramAccount,
  genres,
  influences,
  isProfessional,
  bands,
  lookingFor,
  isProducer,
  premiumAccount,
  handleChange,
  onSubmit,
}) {
  const { register, handleSubmit } = useForm();

  return (
    <MyProfileEditContainer>
      <InAppHeader>
        <LogoContainer>
          <Logo
            src="https://static.thenounproject.com/png/3097969-200.png"
            alt="logo"
          />
        </LogoContainer>
      </InAppHeader>
      <BodyContainer>
        <ProfileContainer>
          <VideoContainer>
            <VideoPlaceholder
              src="https://roadmaptoprofit.com/wp-content/uploads/2018/10/video-placeholder.jpg"
              alt="videoPlaceholder"
            />
            {/* <iframe
          title="userVideo"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MemRPyUHQ6g?start=10&end=25"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
          </VideoContainer>
          <InfoContainer>
            <Form id="edit-form" onSubmit={handleSubmit(onSubmit)}>
              <FormContainer>
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
                    <strong>Descripcion:</strong>
                  </Label>
                  <TextArea
                    className="description-input"
                    id="description"
                    name="description"
                    value={description}
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
                  <p>
                    <strong>Instrumentos:</strong>
                  </p>
                  <p>{instruments}</p>
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
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>
                <div>
                  <p>
                    <strong>Generos:</strong>
                  </p>
                  <p>{genres}</p>
                </div>
                <div>
                  <p>
                    <strong>Influencias:</strong>
                  </p>
                  <p>{influences}</p>
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
                    required
                  >
                    <option value="false">Empirico</option>
                    <option value="true">Profesional</option>
                  </Select>
                </div>
                <div>
                  <p>
                    <strong>Bandas:</strong>
                  </p>
                  <p>{bands}</p>
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
                    <option value="collaboration">Colaborar</option>
                    <option value="session-musician">Musico de Sesion</option>
                    <option value="make-a-band">Crear Banda</option>
                    <option value="complete-a-band">Completar Banda</option>
                    <option value="producer">Productor</option>
                    <option value="mix-engineer">Ingeniero de Mezcla</option>
                  </Select>
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
                    required
                  >
                    <option value="false">No</option>
                    <option value="true">Si</option>
                  </Select>
                </div>
              </FormContainer>
              <div></div>
            </Form>
            <div>
              <p>
                <strong>Membresia:</strong>
              </p>
              <p>{premiumAccount ? "Premium" : "Gratuita"}</p>
            </div>
          </InfoContainer>
        </ProfileContainer>
        <ButtonContainer>
          <button
            form="edit-form"
            className="button-submit"
            id="button-submit"
            type="submit"
            value="Actualizar"
          >
            Actualizar
          </button>
        </ButtonContainer>
      </BodyContainer>
    </MyProfileEditContainer>
  );
}

export default MyProfileEdit;
