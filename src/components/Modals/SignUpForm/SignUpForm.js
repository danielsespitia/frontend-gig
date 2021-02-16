import {
  Form,
  Error,
  ButtonSpan,
  ItemContainer,
  TermsContainer,
  Span,
} from '../Styles/HomeFormsStyles';
import { ActionButton } from '../../../pages/StyledPages/StyledPages';

export function SignUpForm({
  name,
  email,
  password,
  confirmPassword,
  terms,
  handleChange,
  handleSubmit,
  errorsPassword,
  errorsAccount,
}) {
  return (
    <div>
      <Error>{errorsAccount}</Error>
      <Form onSubmit={handleSubmit}>
        <ItemContainer>
          <label className="name-label" htmlFor="name">
            Nombre:
          </label>
          <input
            className="name-input"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Daniel Espitia"
            required
          />
        </ItemContainer>
        <ItemContainer>
          <label className="email-label" htmlFor="email">
            Correo electrónico:
          </label>
          <input
            className="email-input"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="daniel@gig.com"
            required
          />
        </ItemContainer>
        <ItemContainer>
          <label className="password-label" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="password-input"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="***********"
            required
          />
        </ItemContainer>
        <ItemContainer>
          <label className="password-label" htmlFor="confirmPassword">
            Confirmar contraseña:
          </label>
          <input
            className="password-input"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder="***********"
            required
          />
          <Error>{errorsPassword}</Error>
        </ItemContainer>
        <TermsContainer>
          <Span>
            <input
              className="terms-input"
              id="terms"
              type="checkbox"
              name="terms"
              value={terms}
              onChange={handleChange}
              required
            />
            <label className="terms-label" htmlFor="terms">
              Estoy de acuerdo con los Términos y Condiciones
            </label>
          </Span>
        </TermsContainer>
        <ButtonSpan className="submit-span">
          <ActionButton className="submit-button" type="submit">
            Registrarse
          </ActionButton>
        </ButtonSpan>
      </Form>
    </div>
  );
}
