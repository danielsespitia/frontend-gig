import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileInfo from "../../components/MyProfileInfo/MyProfileInfo";
import { PageContainer } from "../StyledPages/StyledPages";

function Messages() {
  return (
    <div className="messages">
      <p><strong>Messages</strong></p>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileInfo />
      </PageContainer>
    </div>
  );
}

export default Messages;
