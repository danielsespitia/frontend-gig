import MessageList from "../../components/MessageList/MessageList";
import MessageRender from "../../components/MessageRender/MessageRender";
import { PageContainer } from "../StyledPages/StyledPages";

function Messages() {
  return (
    <div className="messages">
      <p>
        <strong>Messages</strong>
      </p>
      <PageContainer>
        <MessageList />
        <MessageRender />
      </PageContainer>
    </div>
  );
}

export default Messages;
