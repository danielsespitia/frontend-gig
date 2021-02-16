import { Label, Input, Select, TextArea } from '../Styles';

function ThirdFormChildren({
  mainGenre,
  sideGenre,
  influences,
  bands,
  youtubeAccount,
  twitterUsername,
  facebookAccount,
  instagramAccount,
  handleChange,
  register,
}) {
  return (
    <>
      <div>
        <Label className="mainGenre-label">
          <strong>Género Principal:</strong>
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
          <strong>Otro Género:</strong>
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
    </>
  );
}

export default ThirdFormChildren;
