import styled from "styled-components";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import SignUpModal from "../Home/SignUpModal/SignUpModal";
import LogInModal from "../Home/LogInModal/LogInModal";

export const HomeContainer = styled.div`
  color: white;
  background: linear-gradient(rgba(130, 98, 199, 0.3), rgba(23, 205, 212, 0.3)),
    url("https://img.wavescdn.com/1lib/images/blog/preview/make-online-music-collabs-more-productive.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
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

export const Greeting = styled.div`
  display: inherit;
  flex-direction: column;
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

export const CloseButton = styled.img`
  opacity: 0.5;
  height: 18px;
  cursor: pointer;
`;

Modal.setAppElement("#root");

function Home() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (token) {
    history.push("/app/discover");
  }

  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <HomeContainer className="home">
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
              height: "230px",
              width: "260px",
              borderRadius: "10px",
            },
          }}
        >
          <ModalHeader>
            <h3>Bienvenido</h3>
            <CloseButton
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
              onClick={() => setShowLogInModal(false)}
            ></CloseButton>
          </ModalHeader>
          <LogInModal />
        </Modal>
      </Header>
      <Greeting>
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
              height: "380px",
              width: "260px",
              borderRadius: "10px",
            },
          }}
        >
          <ModalHeader>
            <h3>Bienvenido</h3>
            <CloseButton
              src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
              onClick={() => setShowSignUpModal(false)}
            ></CloseButton>
          </ModalHeader>
          <SignUpModal />
        </Modal>
      </Greeting>
    </HomeContainer>
  );
}

export default Home;
