import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileEdit from "../../components/MyProfileEdit/MyProfileEdit";
import { PageContainer } from "../StyledPages/StyledPages";

function ProfileEdit() {
  return (
    <div className="profile-edit">
      <p><strong>Profile Edit</strong></p>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileEdit />
      </PageContainer>
    </div>
  );
}

export default ProfileEdit;
