// Styles
import { ActionButton } from '../../../pages/StyledPages/StyledPages';
import { Form, Error, ButtonSpan, ItemContainer } from '../Styles/HomeFormsStyles';

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
          <ActionButton
            className="submit-button"
            type="submit"
            value="Iniciar sesión"
          >
            Iniciar sesión
          </ActionButton>
        </ButtonSpan>
      </Form>
      <span>{message}</span>
    </div>
  );
}
