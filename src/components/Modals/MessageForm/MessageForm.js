// Packages
import { useForm } from 'react-hook-form';

// Styles
import { ActionButton } from '../../../pages/StyledPages/StyledPages';
import { Form, MessageInput, ButtonSpan } from './Styles';

function MessageForm({ messageBody, handleChange, disabled, onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MessageInput
        className="messageBody-input"
        id="messageBody"
        name="messageBody"
        value={messageBody}
        onChange={handleChange}
        ref={register}
        placeholder="Escribe aqui tu mensaje"
      />
      <ButtonSpan className="submit-span">
        <ActionButton
          className="submit-button"
          type="submit"
          value="send"
          disabled={disabled}
        >
          Enviar
        </ActionButton>
      </ButtonSpan>
    </Form>
  );
}

export default MessageForm;
