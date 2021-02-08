import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../store/AuthContext";

import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileEdit from "../../components/MyProfileEdit/MyProfileEdit";

import { PageContainer, Aside, Main } from "../StyledPages/StyledPages";

function ProfileEdit() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const [disabled, setDisabled] = useState(true); 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [video, setVideo] = useState("");
  const [videoStartMin, setVideoStartMin] = useState(0);
  const [videoStartSec, setVideoStartSec] = useState(0);
  const [videoEndMin, setVideoEndMin] = useState(0);
  const [videoEndSec, setVideoEndSec] = useState(0);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [mainInstrument, setMainInstrument] = useState("");
  const [sideInstrument, setSideInstrument] = useState("");
  const [youtubeAccount, setYoutubeAccount] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [facebookAccount, setFacebookAccount] = useState("");
  const [instagramAccount, setInstagramAccount] = useState("");
  const [mainGenre, setMainGenre] = useState("");
  const [sideGenre, setSideGenre] = useState("");
  const [influences, setInfluences] = useState("");
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
        setName(data.name || "");
        setVideo(data.video || "");
        setVideoStartMin(data.videoStartMin || 0);
        setVideoStartSec(data.videoStartSec || 0);
        setVideoEndMin(data.videoEndMin || 0);
        setVideoEndSec(data.videoEndSec || 0);
        setEmail(data.email || "");
        setDescription(data.description || "");
        setCity(data.city || "");
        setMainInstrument(data.mainInstrument || "");
        setSideInstrument(data.sideInstrument || "");
        setYoutubeAccount(data.youtubeAccount || "");
        setTwitterUsername(data.twitterUsername || "");
        setFacebookAccount(data.facebookAccount || "");
        setInstagramAccount(data.instagramAccount || "");
        setMainGenre(data.mainGenre || "");
        setSideGenre(data.sideGenre || "");
        setInfluences(data.influences || "");
        setIsProfessional(data.isProfessional || false);
        setBands(data.bands || "");
        setLookingFor(data.lookingFor || "Collaboration");
        setIsProducer(data.isProducer || false);
        setPremiumAccount(data.premiumAccount || false);
      } catch (error) {
        localStorage.removeItem("token");
        history.push("/");
      }
    }
    load();
  }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisabled(false);

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
      case "videoStartMin":
        setVideoStartMin(value);
        break;
      case "videoStartSec":
        setVideoStartSec(value);
        break;
      case "videoEndMin":
        setVideoEndMin(value);
        break;
      case "videoEndSec":
        setVideoEndSec(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "city":
        setCity(value);
        break;
      case "mainInstrument":
        setMainInstrument(value);
        break;
      case "sideInstrument":
        setSideInstrument(value);
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
      case "mainGenre":
        setMainGenre(value);
        break;
      case "sideGenre":
        setSideGenre(value);
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

  const onSubmit = async (data) => {
    const {
      name,
      email,
      video,
      videoStartMin,
      videoStartSec,
      videoEndMin,
      videoEndSec,
      description,
      city,
      mainInstrument,
      sideInstrument,
      mainGenre,
      sideGenre,
      influences,
      youtubeAccount,
      twitterUsername,
      facebookAccount,
      instagramAccount,
      isProducer,
      isProfessional,
      lookingFor,
      bands,
    } = data;
    try {
      const token = localStorage.getItem("token");
      await axios({
        method: "PUT",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users`,
        data: {
          name,
          email,
          description,
          city,
          mainInstrument,
          sideInstrument,
          mainGenre,
          sideGenre,
          youtubeAccount,
          twitterUsername,
          facebookAccount,
          instagramAccount,
          isProducer,
          isProfessional,
          lookingFor,
          influences,
          bands,
          video,
          videoStartMin,
          videoStartSec,
          videoEndMin,
          videoEndSec,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      history.push("/app/profile");
    } catch (err) {}
  };

  const handleDelete = async (e) => {
    try {
      const token = localStorage.getItem("token");
      axios({
        method: "DELETE",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Tu cuenta fue eliminada");
      localStorage.removeItem("token");
      logout();
      history.push("/");
    } catch (err) {
      alert("Tu cuenta no pudo ser eliminada", err);
    }
  };

  return (
    <div className="profile-edit">
      <PageContainer>
        <Aside>
          <MyProfileSettings
            premiumAccount={premiumAccount}
            handleDelete={handleDelete}
          />
        </Aside>
        <Main>
          <MyProfileEdit
            name={name}
            video={video}
            videoStartMin={videoStartMin}
            videoStartSec={videoStartSec}
            videoEndMin={videoEndMin}
            videoEndSec={videoEndSec}
            email={email}
            description={description}
            city={city}
            mainInstrument={mainInstrument}
            sideInstrument={sideInstrument}
            youtubeAccount={youtubeAccount}
            twitterUsername={twitterUsername}
            facebookAccount={facebookAccount}
            instagramAccount={instagramAccount}
            mainGenre={mainGenre}
            sideGenre={sideGenre}
            influences={influences}
            isProfessional={isProfessional}
            bands={bands}
            lookingFor={lookingFor}
            isProducer={isProducer}
            premiumAccount={premiumAccount}
            handleChange={handleChange}
            onSubmit={onSubmit}
            disabled={disabled}
          />
        </Main>
      </PageContainer>
    </div>
  );
}

export default ProfileEdit;
