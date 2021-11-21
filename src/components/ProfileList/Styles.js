// Packages
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: inherit;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px;
`;

export const MessageButtonContainer = styled.div`
  display: inherit;
  margin-left: 10px;
  margin-right: 10px;
  height: 100px;
`;

export const MessageButton = styled.img`
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
  height: 100%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const sendMessageModalStyles = {
  overlay: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  },
  content: {
    margin: 'auto',
    height: '268px',
    width: '383px',
    borderRadius: '10px',
  },
};

export const ModalHeader = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
`;

export const To = styled.h3`
  font-weight: normal;
  align-self: center;
`;

export const SendUserContainer = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const ModalThumbnailContainer = styled.div`
  display: inherit;
  height: 50px;
  width: 50px;
  justify-content: center;
  border-radius: 50px;
`;

export const Thumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const SendUserName = styled.p`
  margin-left: 5px;
`;

export const CloseModalButton = styled.div`
  display: inherit;
  align-self: flex-start;
`;

export const CloseButton = styled.img`
  opacity: 0.5;
  height: 18px;
  cursor: pointer;
`;

export const NextButtonContainer = styled.div`
  display: inherit;
  margin-left: 5px;
  margin-right: 5px;
  background-color: white;
  border-radius: 50%;
  height: 80px;
`;

export const NextButton = styled(MessageButton)`
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
`;
