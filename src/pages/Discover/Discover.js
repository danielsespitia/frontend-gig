import styled from "styled-components";

import MessageList from "../../components/MessageList/MessageList";
import ProfileList from "../../components/ProfileList/ProfileList";
import { PageContainer, Aside, Main } from "../StyledPages/StyledPages";

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
