// Context
import { useAppContext } from '../../../context/app-context';

// Styles
import {
  Label,
  Input,
  VideoStartContainer,
  StartTimestampContainer,
  Select,
} from '../Styles';

function FirstFormChildren({ handleChange, register }) {
  const {
    state: { userData },
  } = useAppContext();
  const { name, video, videoStartMin, videoStartSec, mainInstrument } =
    userData;

  return (
    <>
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
            Copia la URL de YouTube donde este tu mejor ejecución, este video
            será lo primero que vean los demás miembros de GIG en tu perfil
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
          Tendrás 15 segundos para enseñar tus habilidades, escribe a
          continuación el minuto y segundo donde quieres que inicie tu video
          introductorio.
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
    </>
  );
}

export default FirstFormChildren;
