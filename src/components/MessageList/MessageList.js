import styled from "styled-components";

import HeaderLeft from "../Headers/HeaderLeft";

export const MessageListContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
`;

function MessageList({ profilePicture }) {
  return (
    <MessageListContainer>
      <HeaderLeft
      profilePicture={profilePicture} />
      <p>Message List</p>
    </MessageListContainer>
  );
}

export default MessageList;
