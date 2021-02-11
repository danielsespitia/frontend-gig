import styled from "styled-components";
import { ActionButton } from "../../../pages/StyledPages/StyledPages";

export const Form = styled.form`
  display: grid;
`;

export const Error = styled.span`
  font-size: 12px;
  color: grey;
  font-style: italic;
`;

export const ButtonSpan = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ItemContainer = styled.span`
  display: inherit;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TermsContainer = styled.span`
  display: inherit;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;


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
