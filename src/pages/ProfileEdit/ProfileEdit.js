import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileInfo from "../../components/MyProfileInfo/MyProfileInfo";
import { PageContainer } from "../StyledPages/StyledPages";

function ProfileEdit() {
  return (
    <div className="profile-edit">
      <p><strong>Profile Edit</strong></p>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileInfo />
      </PageContainer>
    </div>
  );
}

export default ProfileEdit;
