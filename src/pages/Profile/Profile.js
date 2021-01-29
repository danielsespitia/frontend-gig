import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileInfo from "../../components/MyProfileInfo/MyProfileInfo";
import { PageContainer } from "./ProfileStyles";

function Profile() {
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileInfo />
      </PageContainer>
    </div>
  );
}

export default Profile;
