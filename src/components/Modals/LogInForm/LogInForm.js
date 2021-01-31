import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
`;

export function LogInForm ({
  email, 
  password,
  handleSubmit,
  handleChange,
  errorsLogIn
}) 
{
  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <span>{ errorsLogIn }</span>
        <label
          htmlFor="email"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="daniel@gig.com"
          required
        />
        <label 
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          placeholder="***********"
          required
        />
        <div className="Form__subtmit-span">
          <button
            className="Form__submit-input"
            type="submit"
            value="Iniciar sesión"
          >Iniciar sesión</button>
        </div>
      </Form>
    </div>
  )
} 
