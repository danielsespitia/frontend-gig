import styled from "styled-components";
import { ActionButton } from "../../../pages/StyledPages/StyledPages";

export const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65%;
`;

export const MessageInput = styled.textarea`
  box-sizing: border-box;
  resize: none;
  width: 100%;
  height: 100%;
`;

export const ButtonSpan = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const SendMessageButton = styled(ActionButton)`
  justify-self: center;
`;

function MessageForm() {
  return (
    <Form>
      <MessageInput
        placeholder="Escribe aqui tu mensaje"
      />
      <ButtonSpan className="submit-span">
        <ActionButton className="submit-button" type="submit" value="send">
          Enviar
        </ActionButton>
      </ButtonSpan>
    </Form>
  );
}

export default MessageForm;
