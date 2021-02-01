import styled from "styled-components";

export const Form = styled.form`
  display: grid;
`;

export const Error = styled.span`
  font-size: 12px;
  color: grey;
  font-style: italic;
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
        <label className="name-label" htmlFor="name">
          Nombre
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
        <label className="email-label" htmlFor="email">
          Correo electrónico
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
        <label className="password-label" htmlFor="password">
          Contraseña
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
        <label className="password-label" htmlFor="confirmPassword">
          Confirmar contraseña
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
        <span>
          <label className="terms-label" htmlFor="terms">
            Estoy de acuerdo con los Términos y Condiciones
          </label>
          <input
            className="terms-input"
            id="terms"
            type="checkbox"
            name="terms"
            value={terms}
            onChange={handleChange}
            required
          />
        </span>
        <span className="submit-span">
          <button className="submit-input" type="submit">
            Registrarse
          </button>
        </span>
      </Form>
    </div>
  );
}
