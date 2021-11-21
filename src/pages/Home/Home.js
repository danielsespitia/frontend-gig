// Packages
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';

// Components
import SignUpModal from '../Home/SignUpModal/SignUpModal';
import LogInModal from '../Home/LogInModal/LogInModal';

// Styles
import {
  MainActionButton,
  SecondaryActionButton,
  gigLogo,
  closeButtonSrc,
} from '../StyledPages/StyledPages';
import {
  HomeContainer,
  HomeHeader,
  HomeTitle,
  LogoContainer,
  Logo,
  LogInButton,
  Greeting,
  SignUpButton,
  ModalHeader,
  CloseButton,
  LogInModalStyles,
  SignUpModalStyles,
} from './Styles/HomeStyles';

Modal.setAppElement('#root');

function Home() {
  const history = useHistory();
  const token = localStorage.getItem('token');

  if (token) {
    history.push('/app/discover');
  }

  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <HomeContainer className="home">
      <HomeHeader className="header">
        <LogoContainer className="logo">
          <Logo src={gigLogo} alt="logo" />
          <p>GIG</p>
        </LogoContainer>
        <LogInButton>
          <SecondaryActionButton onClick={() => setShowLogInModal(true)}>
            Iniciar Sesión
          </SecondaryActionButton>
        </LogInButton>
        <Modal
          isOpen={showLogInModal}
          onRequestClose={() => setShowLogInModal(false)}
          style={LogInModalStyles}
        >
          <ModalHeader>
            <LogoContainer>
              <Logo src={gigLogo} alt="logo" />
            </LogoContainer>
            <h3>Bienvenido de vuelta!</h3>
            <CloseButton
              src={closeButtonSrc}
              onClick={() => setShowLogInModal(false)}
            ></CloseButton>
          </ModalHeader>
          <LogInModal />
        </Modal>
      </HomeHeader>
      <Greeting>
        <div>
          <HomeTitle>Descubre músicos cerca</HomeTitle>
        </div>
        <SignUpButton>
          <MainActionButton onClick={() => setShowSignUpModal(true)}>
            Regístrate
          </MainActionButton>
        </SignUpButton>
        <Modal
          isOpen={showSignUpModal}
          onRequestClose={() => setShowSignUpModal(false)}
          style={SignUpModalStyles}
        >
          <ModalHeader>
            <LogoContainer>
              <Logo src={gigLogo} alt="logo" />
            </LogoContainer>
            <h3>Bienvenido a GIG</h3>
            <CloseButton
              src={closeButtonSrc}
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
