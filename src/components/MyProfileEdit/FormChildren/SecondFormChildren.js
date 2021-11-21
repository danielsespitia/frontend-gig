// Context
import { useAppContext } from '../../../context/app-context';

// Styles
import { Label, Input, Select, TextArea } from '../Styles';

function SecondFormChildren({ handleChange, register }) {
  const {
    state: { userData },
  } = useAppContext();
  const {
    sideInstrument,
    lookingFor,
    email,
    city,
    description,
    isProducer,
    isProfessional,
  } = userData;
  return (
    <>
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
          {/* // TODO: Map values */}
          <option value="Ninguno">Ninguno</option>
          <option value="Guitarrista">Guitarrista</option>
          <option value="Bajista">Bajista</option>
          <option value="Baterista">Baterista</option>
          <option value="Vocalista">Vocalista</option>
          <option value="Pianista">Pianista</option>
          <option value="Diseñador Sonoro">Diseñador Sonoro</option>
          <option value="Beat Maker">Beat Maker</option>
          <option value="Ingeniero de Mezcla">Ingeniero de Mezcla</option>
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
          <option value="Ingeniero de Mezcla">Ingeniero de Mezcla</option>
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
          <strong>Descripción:</strong>
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
          <strong>Perfil de Músico:</strong>
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
    </>
  );
}

export default SecondFormChildren;
