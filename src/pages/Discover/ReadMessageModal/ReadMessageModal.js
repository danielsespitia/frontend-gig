import Modal from "react-modal";

function ReadMessageModal({
  sender,
  messageBody,
  senderPhoto,
  timestamp,
  setShowReadMessageModal,
  showReadMessageModal,
}) {
  return (
    <Modal
      isOpen={showReadMessageModal}
      onRequestClose={() => setShowReadMessageModal(false)}
      style={{
        overlay: {
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
        },
        content: {
          margin: "auto",
          height: "30%",
          width: "30%",
          borderRadius: "10px",
        },
      }}
    >
      <img
      src={senderPhoto}
      alt="sender"
      />
      <p>{timestamp}</p>
      <h3>{sender}</h3>
      <p>{messageBody}</p>
    </Modal>
  );
}

export default ReadMessageModal;
