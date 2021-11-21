// Packages
import Modal from 'react-modal';

// Styles
import {
  ModalHeader,
  To,
  SendUserContainer,
  ThumbnailContainer,
  Thumbnail,
  SendUserName,
  CloseModalButton,
  CloseButton,
  MessageBody,
  ReadMessageModalStyles,
} from './Styles';

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
      style={ReadMessageModalStyles}
    >
      <ModalHeader>
        <To>
          De:
          <SendUserContainer>
            <ThumbnailContainer>
              <Thumbnail src={senderPhoto} alt="user thumbnail" />
            </ThumbnailContainer>
            <SendUserName>
              {' '}
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
