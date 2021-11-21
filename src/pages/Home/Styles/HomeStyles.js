// Packages
import styled from 'styled-components';

export const HomeContainer = styled.div`
  color: white;
  background: linear-gradient(rgba(130, 98, 199, 0.3), rgba(23, 205, 212, 0.3)),
    url('https://img.wavescdn.com/1lib/images/blog/preview/make-online-music-collabs-more-productive.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const HomeHeader = styled.header`
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
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const LogoContainerModal = styled(LogoContainer)`
  background-color: grey;
  width: 100%;
`;

export const Logo = styled.img`
  display: inherit;
  height: 30px;
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

export const CloseButton = styled.img`
  opacity: 0.5;
  height: 18px;
  cursor: pointer;
`;

export const LogInModalStyles = {
  overlay: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  },
  content: {
    margin: 'auto',
    height: '230px',
    width: '260px',
    borderRadius: '10px',
  },
};

export const SignUpModalStyles = {
  overlay: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  },
  content: {
    margin: 'auto',
    height: '390px',
    width: '260px',
    borderRadius: '10px',
  },
};
