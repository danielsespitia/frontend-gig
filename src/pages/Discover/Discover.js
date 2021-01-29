import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileInfo from "../../components/MyProfileInfo/MyProfileInfo";
import { PageContainer } from "../StyledPages/StyledPages";

function Discover() {
  return (
    <div className="discover">
      <p><strong>Discover</strong></p>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileInfo />
      </PageContainer>
    </div>
  );
}

export default Discover;
