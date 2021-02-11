import { useState } from "react";
import axios from "axios";
import MessageForm from "../../../components/Modals/MessageForm/MessageForm";

function SendMessageModal({ id }) {
  const [messageBody, setMessageBody] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setDisabled(false);
    const { name, value } = e.target;
    switch (name) {
      case "messageBody":
        setMessageBody(value);
        console.log(value)
        break;
      default:
        break;
    }
  };

  const onSubmit = async (data) => {
    const { messageBody } = data;
    try {
      const token = localStorage.getItem("token");
      await axios({
        method: "POST",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/messages/${id}`,
        data: {
          messageBody,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('kemas')
      alert("Mensaje enviado!");
    } catch (err) {
      alert("noseenviogg")
    }
  };

  return (
    <MessageForm
      messageBody={messageBody}
      disabled={disabled}
      handleChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}

export default SendMessageModal;
