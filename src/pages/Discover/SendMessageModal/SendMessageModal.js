import { useState } from "react";
import MessageForm from "../../../components/Modals/MessageForm/MessageForm";

function SendMessageModal() {
  const [messageBody, setMessageBody] = useState("");
  
  return (
    <>
      <MessageForm></MessageForm>
    </>
  );
}

export default SendMessageModal;
