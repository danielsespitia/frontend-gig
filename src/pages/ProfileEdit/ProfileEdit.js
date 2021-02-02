import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileEdit from "../../components/MyProfileEdit/MyProfileEdit";
import { PageContainer } from "../StyledPages/StyledPages";

function ProfileEdit() {
  const history = useHistory();
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

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("token");
      try {
        const {
          data: { data },
        } = await axios({
          method: "GET",
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: "/users/profile",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setName(data.name);
        setVideo(data.video);
        setEmail(data.email);
        setDescription(data.description);
        setCity(data.city);
        setInstruments(data.instruments);
        setYoutubeAccount(data.youtubeAccount);
        setTwitterUsername(data.twitterUsername);
        setFacebookAccount(data.facebookAccount);
        setInstagramAccount(data.instagramAccount);
        setGenres(data.genres);
        setInfluences(data.influences);
        setIsProfessional(data.isProfessional);
        setBands(data.bands);
        setLookingFor(data.lookingFor);
        setIsProducer(data.isProducer);
        setPremiumAccount(data.premiumAccount);
      } catch (error) {
        localStorage.removeItem("token");
        history.push("/");
      }
    }
    load();
  }, [history]);

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
    <div className="profile-edit">
      <p>
        <strong>Profile Edit</strong>
      </p>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileEdit
          name={name}
          video={video}
          email={email}
          description={description}
          city={city}
          instruments={instruments}
          youtubeAccount={youtubeAccount}
          twitterUsername={twitterUsername}
          facebookAccount={facebookAccount}
          instagramAccount={instagramAccount}
          genres={genres}
          influences={influences}
          isProfessional={isProfessional}
          bands={bands}
          lookingFor={lookingFor}
          isProducer={isProducer}
          premiumAccount={premiumAccount}
          handleChange={handleChange}
        />
      </PageContainer>
    </div>
  );
}

export default ProfileEdit;
