import styled from "styled-components";

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
  padding-top: 10px;
`;

export const ItemContainer = styled.span`
  display: inherit;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export function LogInForm({
  email,
  password,
  handleSubmit,
  handleChange,
  message,
  errorsLogIn,
}) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Error>{errorsLogIn}</Error>
        <ItemContainer>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            placeholder="daniel@gig.com"
            required
          />
        </ItemContainer>
        <ItemContainer>
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            placeholder="***********"
            required
          />
        </ItemContainer>
        <ButtonSpan className="submit-span">
          <button
            className="submit-button"
            type="submit"
            value="Iniciar sesión"
          >
            Iniciar sesión
          </button>
        </ButtonSpan>
      </Form>
      <span>{message}</span>
    </div>
  );
}
