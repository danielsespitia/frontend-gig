import Modal from "react-modal";
import styled from "styled-components";

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

export const ThumbnailContainer = styled.div`
  display: inherit;
  justify-content: center;
  border-radius: 50px;
`;

export const Thumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 50px;
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

export const MessageBody = styled.div`
`;

function ReadMessageModal({
  sender,
  messageBody,
  senderPhoto,
  timestamp,
  onClose,
  showReadMessageModal,
}) {
  return (
    <Modal
      isOpen={showReadMessageModal}
      onRequestClose={() => onClose(false)}
      style={{
        overlay: {
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        },
        content: {
          margin: "auto",
          maxHeight: "220px",
          width: "383px",
          borderRadius: "10px",
        },
      }}
    >
      <ModalHeader>
        <To>
          De:
          <SendUserContainer>
            <ThumbnailContainer>
              <Thumbnail src={senderPhoto} alt="user thumbnail" />
            </ThumbnailContainer>
            <SendUserName>
              {" "}
              <strong>{sender}</strong>
            </SendUserName>
          </SendUserContainer>
        </To>
        <CloseModalButton>
          <CloseButton
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
            onClick={() => onClose(false)}
          ></CloseButton>
        </CloseModalButton>
      </ModalHeader>
      <MessageBody>
        <p>{messageBody}</p>
      </MessageBody>
    </Modal>
  );
}

export default ReadMessageModal;
