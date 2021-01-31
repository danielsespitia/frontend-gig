import { useState } from "react";

import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileInfo from "../../components/MyProfileInfo/MyProfileInfo";
import { PageContainer } from "../StyledPages/StyledPages";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [instruments, setInstruments] = useState([]);
  const [youtubeAccount, setYoutubeAccount] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [facebookAccount, setFacebookAccount] = useState("");
  const [instagramAccount, setInstagramAccount] = useState("");
  const [genres, setGenres] = useState([]);
  const [influences, setInfluences] = useState([]);
  const [isProfessional, setIsProfessional] = useState(false);
  const [bands, setBands] = useState("");
  const [lookingFor, setLookingFor] = useState("Collaboration");
  const [isProducer, setIsProducer] = useState(false);
  const [premiumAccount, setPremiumAccount] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "video":
        setVideo(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "city":
        setCity(value);
        break;
      case "instruments":
        setInstruments(value);
        break;
      case "youtubeAccount":
        setYoutubeAccount(value);
        break;
      case "twitterUsername":
        setTwitterUsername(value);
        break;
      case "facebookAccount":
        setFacebookAccount(value);
        break;
      case "instagramAccount":
        setInstagramAccount(value);
        break;
      case "genres":
        setGenres(value);
        break;
      case "influences":
        setInfluences(value);
        break;
      case "isProfessional":
        setIsProfessional(value);
        break;
      case "bands":
        setBands(value);
        break;
      case "lookingFor":
        setLookingFor(value);
        break;
      case "isProducer":
        setIsProducer(value);
        break;
      case "premiumAccount":
        setPremiumAccount(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="profile">
      <p>
        <strong>Profile Page</strong>
      </p>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileInfo />
      </PageContainer>
    </div>
  );
}

export default Profile;
