import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";

import SignUpModal from "../Home/SignUpModal/SignUpModal";
import LogInModal from "../Home/LogInModal/LogInModal";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;

export const LogoContainer = styled.div`
  display: inherit;
`;

export const Logo = styled.img`
  width: 50px;
`;

export const LogInButton = styled.div`
  align-self: center;
  margin-right: 1rem;
`;

export const Body = styled.div`
  height: 50rem;
  margin: auto;
`;

export const SignUpButton = styled.div`
  align-self: center;
`;

export const ModalHeader = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const CloseModalButton = styled.div`
  align-self: center;
`;

Modal.setAppElement("#root");

function Home() {
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <div className="home">
      <Header className="header">
        <LogoContainer className="logo">
          <Logo
            src="https://static.thenounproject.com/png/3097969-200.png"
            alt="logo"
          />
          <p>GIG</p>
        </LogoContainer>
        <LogInButton>
          <button onClick={() => setShowLogInModal(true)}>
            Iniciar Sesion
          </button>
        </LogInButton>
        <Modal
          isOpen={showLogInModal}
          onRequestClose={() => setShowLogInModal(false)}
          style={{
            overlay: {},
            content: {
              margin: "auto",
              height: "25%",
              width: "20%",
            },
          }}
        >
          <ModalHeader>
            <h3>Bienvenido</h3>
            <CloseModalButton>
              <button onClick={() => setShowLogInModal(false)}>X</button>
            </CloseModalButton>
          </ModalHeader>
          <LogInModal />
        </Modal>
      </Header>
      <Body className="body">
        <div>
          <h1>Descubre musicos cerca</h1>
        </div>
        <SignUpButton>
          <button onClick={() => setShowSignUpModal(true)}>Registrate</button>
        </SignUpButton>
        <Modal
          isOpen={showSignUpModal}
          onRequestClose={() => setShowSignUpModal(false)}
          style={{
            overlay: {},
            content: {
              margin: "auto",
              height: "40%",
              width: "20%",
            },
          }}
        >
          <ModalHeader>
            <h3>Bienvenido</h3>
            <CloseModalButton>
              <button onClick={() => setShowSignUpModal(false)}>X</button>
            </CloseModalButton>
          </ModalHeader>
          <SignUpModal />
        </Modal>
      </Body>
    </div>
  );
}

export default Home;
