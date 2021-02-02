import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileInfo from "../../components/MyProfileInfo/MyProfileInfo";
import { PageContainer } from "../StyledPages/StyledPages";

function Profile() {
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

  return (
    <div className="profile">
      <p>
        <strong>Profile Page</strong>
      </p>
      <PageContainer>
        <MyProfileSettings />
        <MyProfileInfo
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
        />
      </PageContainer>
    </div>
  );
}

export default Profile;
