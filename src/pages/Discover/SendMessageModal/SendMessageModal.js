import { useState } from "react";
import MessageForm from "../../../components/Modals/MessageForm/MessageForm";

function SendMessageModal() {
  const [messageBody, setMessageBody] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setDisabled(false);
    const { name, value } = e.target;
    switch (name) {
      case "messageBody":
        setMessageBody(value);
        break;
      default:
        break;
    }
  };

  return (
    <MessageForm
      messageBody={messageBody}
      disabled={disabled}
      handleChange={handleChange}
    />
  );
}

export default SendMessageModal;
