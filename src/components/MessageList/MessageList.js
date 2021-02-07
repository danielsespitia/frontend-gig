import styled from "styled-components";

import Header from "../Header/Header";

export const MessageListContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
`;

function MessageList() {
  return (
    <MessageListContainer>
      <Header />
      <p>Message List</p>
    </MessageListContainer>
  );
}

export default MessageList;
