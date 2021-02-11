import styled from "styled-components";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import SignUpModal from "../Home/SignUpModal/SignUpModal";
import LogInModal from "../Home/LogInModal/LogInModal";

import {
  MainActionButton,
  SecondaryActionButton,
} from "../StyledPages/StyledPages";

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

export const HomeTitle = styled.h1`
font-size: 26px;
  text-shadow: 1.2px 1.2px 1px #000000;
`;

export const LogoContainer = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
`;

export const LogoContainerModal = styled(LogoContainer)`
  background-color: grey;
  width: 100%;
`;

export const Logo = styled.img`
  display: inherit;
  height: 40px;
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
  align-items: center;
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
            src="https://res.cloudinary.com/danielsespitia/image/upload/v1613019159/User-ProfilePicture/LOGO_Mesa_de_trabajo_1_tjzeqa.ico"
            alt="logo"
          />
          <p>GIG</p>
        </LogoContainer>
        <LogInButton>
          <SecondaryActionButton onClick={() => setShowLogInModal(true)}>
            Iniciar Sesion
          </SecondaryActionButton>
        </LogInButton>
        <Modal
          isOpen={showLogInModal}
          onRequestClose={() => setShowLogInModal(false)}
          style={{
            overlay: {
              background:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
            },
            content: {
              margin: "auto",
              height: "230px",
              width: "260px",
              borderRadius: "10px",
            },
          }}
        >
          <ModalHeader>
            <LogoContainer>
              <Logo
                src="https://res.cloudinary.com/danielsespitia/image/upload/v1613019159/User-ProfilePicture/LOGO_Mesa_de_trabajo_1_tjzeqa.ico"
                alt="logo"
              />
            </LogoContainer>
            <h3>Bienvenido de vuelta!</h3>
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
          <HomeTitle>Descubre musicos cerca</HomeTitle>
        </div>
        <SignUpButton>
          <MainActionButton onClick={() => setShowSignUpModal(true)}>
            Registrate
          </MainActionButton>
        </SignUpButton>
        <Modal
          isOpen={showSignUpModal}
          onRequestClose={() => setShowSignUpModal(false)}
          style={{
            overlay: {
              background:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
            },
            content: {
              margin: "auto",
              height: "390px",
              width: "260px",
              borderRadius: "10px",
            },
          }}
        >
          <ModalHeader>
            <LogoContainer>
              <Logo
                src="https://res.cloudinary.com/danielsespitia/image/upload/v1613019159/User-ProfilePicture/LOGO_Mesa_de_trabajo_1_tjzeqa.ico"
                alt="logo"
              />
            </LogoContainer>
            <h3>Bienvenido a GIG</h3>
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
