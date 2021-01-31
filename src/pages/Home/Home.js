import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 3rem;
`;

export const LoginButton = styled.div`
  align-self: center;
  margin-right: 1rem;
`;

export const Body = styled.div`
  height: 50rem;
  margin: auto;
`;

export const SignupButton = styled.div`
  align-self: center;
`;

function Home() {
  return (
    <div className="home">
      <Header className="header">
        <LoginButton>
          <button>Iniciar Sesion</button>
        </LoginButton>
      </Header>
      <Body className="body">
        <div>
          <h1>Descubre musicos cerca</h1>
        </div>
        <SignupButton>
          <button>Registrate</button>
        </SignupButton>
      </Body>
    </div>
  );
}

export default Home;
