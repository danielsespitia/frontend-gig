import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileInfo from "../../components/MyProfileInfo/MyProfileInfo";
import { PageContainer } from "./profile-styles";

function Profile() {
  return (
    <div className="profile">
      <PageContainer>
        <h1>Prueba</h1>
        <MyProfileSettings />
        <MyProfileInfo />
      </PageContainer>
    </div>
  );
}

export default Profile;
