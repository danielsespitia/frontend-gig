import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";

import { AuthContext } from "../../store/AuthContext";

import MyProfileSettings from "../../components/MyProfileSettings/MyProfileSettings";
import MyProfileEdit from "../../components/MyProfileEdit/MyProfileEdit";

import { PageContainer, Aside, Main } from "../StyledPages/StyledPages";

function ProfileEdit() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [video, setVideo] = useState("");
  const [videoStart, setVideoStart] = useState(0);
  const [videoEnd, setVideoEnd] = useState(0);
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
        setName(data.name || "");
        setVideo(data.video || "");
        setVideoStart(data.videoStart || 0);
        setVideoEnd(data.videoEnd || 0);
        setEmail(data.email || "");
        setDescription(data.description || "");
        setCity(data.city || "");
        setInstruments(data.instruments || []);
        setYoutubeAccount(data.youtubeAccount || "");
        setTwitterUsername(data.twitterUsername || "");
        setFacebookAccount(data.facebookAccount || "");
        setInstagramAccount(data.instagramAccount || "");
        setGenres(data.genres || []);
        setInfluences(data.influences || []);
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

  const onSubmit = async (data) => {
    const {
      name,
      email,
      video,
      videoStart,
      videoEnd,
      description,
      city,
      youtubeAccount,
      twitterUsername,
      facebookAccount,
      instagramAccount,
      isProducer,
      isProfessional,
      lookingFor,
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
          youtubeAccount,
          twitterUsername,
          facebookAccount,
          instagramAccount,
          isProducer,
          isProfessional,
          lookingFor,
          video,
          videoStart,
          videoEnd,
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
      console.log(err);
    }
  };

  return (
    <div className="profile-edit">
      <PageContainer>
        <Aside>
          <MyProfileSettings handleDelete={handleDelete} />
        </Aside>
        <Main>
          <MyProfileEdit
            name={name}
            video={video}
            videoStart={videoStart}
            videoEnd={videoEnd}
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
            onSubmit={onSubmit}
          />
        </Main>
      </PageContainer>
    </div>
  );
}

export default ProfileEdit;
