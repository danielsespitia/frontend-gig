import { useForm } from "react-hook-form";

import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const VideoContainer = styled.div`
  display: inherit;
`;

export const InfoContainer = styled.div`
  display: inherit;
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
  onSubmit
}) {
  const { register, handleSubmit } = useForm();

  return (
    <ProfileContainer>
      <p>Mi Perfil (edit)</p>
      <VideoContainer>
        {/* <Iframe
          title="userVideo"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MemRPyUHQ6g?start={videoStart}&end={videoEnd}"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Iframe> */}
      </VideoContainer>
      <InfoContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              <strong>Nombre:</strong>
            </label>
            <input
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
            <label>
              <strong>Correo Electrónico:</strong>
            </label>
            <input
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
            <label>
              <strong>Descripcion:</strong>
            </label>
            <textarea
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
            <label>
              <strong>Ciudad:</strong>
            </label>
            <input
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
            <label>
              <strong>Canal de YouTube:</strong>
            </label>
            <input
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
            <label>
              <strong>Twitter:</strong>
            </label>
            <input
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
            <label>
              <strong>Facebook:</strong>
            </label>
            <input
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
            <label>
              <strong>Instagram:</strong>
            </label>
            <input
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
            <label className="isProfessional-label">Perfil de Musico:</label>
            <select
              id="isProfessional"
              name="isProfessional"
              value={isProfessional}
              onChange={handleChange}
              ref={register}
              required
            >
              <option value="false">Empirico</option>
              <option value="true">Profesional</option>
            </select>
          </div>
          <div>
            <p>
              <strong>Bandas:</strong>
            </p>
            <p>{bands}</p>
          </div>
          <div>
            <label className="lookingFOr-label">Estoy buscando:</label>
            <select
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
            </select>
          </div>
          <div>
            <label className="isProducer-label">Productor:</label>
            <select
              id="isProducer"
              name="isProducer"
              value={isProducer}
              onChange={handleChange}
              ref={register}
              required
            >
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
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
        </form>
      </InfoContainer>
      <div>
        <p>
          <strong>Membresia:</strong>
        </p>
        <p>{premiumAccount}</p>
      </div>
    </ProfileContainer>
  );
}

export default MyProfileEdit;
