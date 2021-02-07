import { useForm } from "react-hook-form";

import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: inherit;
  flex-direction: column;
  background-color: lightgrey;
  align-items: center;
  align-self: center;
  width: 560px;
`;

export const VideoContainer = styled.div`
  display: inherit;
`;

export const VideoPlaceholder = styled.img`
  width: 560px;
  height: 315px;
`;

export const InfoContainer = styled.div`
  padding: 30px;
  display: grid;
`;

export const FormContainer = styled.div`
  display: inherit;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px 0px;
`;

export const Form = styled.div`
  display: inherit;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  display: inherit;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.5);
  width: 85%;
`;

export const TextArea = styled.textarea`
  display: inherit;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.5);
  width: 85%;
`;

const Select = styled.select ` 
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #CED4DA;
  background-color: #ffffff;
  color: #6c757d;
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
        <Form onSubmit={handleSubmit(onSubmit)}>
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
              <Label className="isProfessional-label">Perfil de Musico:</Label>
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
              <Label className="lookingFor-label">Estoy buscando:</Label>
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
              <Label className="isProducer-label">Productor:</Label>
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
            <a href="/app/profile">
              <button
                className="button-submit"
                id="button-submit"
                type="submit"
                value="Actualizar"
              >
                Actualizar
              </button>
            </a>
          </FormContainer>
        </Form>
      </InfoContainer>
      <div>
        <p>
          <strong>Membresia:</strong>
        </p>
        <p>{premiumAccount ? "Premium" : "Gratuita"}</p>
      </div>
    </ProfileContainer>
  );
}

export default MyProfileEdit;
