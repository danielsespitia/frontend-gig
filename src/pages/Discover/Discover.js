import styled from "styled-components";

import MessageList from "../../components/MessageList/MessageList";
import ProfileList from "../../components/ProfileList/ProfileList";
import { PageContainer } from "../StyledPages/StyledPages";

export const Aside = styled.div`
  display: inherit;
  justify-content: center;
  flex-basis: 25%;
  min-width: 325px;
  max-width: 375px;
  border-right: 0.5px solid lightgrey;
  border-bottom: 0.5px solid lightgrey;
`;

export const Main = styled.div`
  display: inherit;
  justify-content: center;
  flex: 1;
`;

function Discover() {
  return (
    <div className="discover">
      <PageContainer>
        <Aside>
          <MessageList />
        </Aside>
        <Main>
          <ProfileList />
        </Main>
      </PageContainer>
    </div>
  );
}

export default Discover;
