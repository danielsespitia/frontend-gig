import MessageList from "../../components/MessageList/MessageList";
import ProfileList from "../../components/ProfileList/ProfileList";
import { PageContainer } from "../StyledPages/StyledPages";

function Discover() {
  return (
    <div className="discover">
      <p>
        <strong>Discover</strong>
      </p>
      <PageContainer>
        <MessageList />
        <ProfileList />
      </PageContainer>
    </div>
  );
}

export default Discover;
