import styled from "styled-components";

import MessageList from "../../components/MessageList/MessageList";
import MessageRender from "../../components/MessageRender/MessageRender";

import { PageContainer, Aside, Main } from "../StyledPages/StyledPages";

function Messages() {
  return (
    <div className="messages">
      <PageContainer>
        <Aside>
          <MessageList />
        </Aside>
        <Main>
          <MessageRender />
        </Main>
      </PageContainer>
    </div>
  );
}

export default Messages;
