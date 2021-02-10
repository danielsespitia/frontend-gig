import { useState, useEffect, useHistory } from "react";
import axios from "axios";
import styled from "styled-components";

import MessageList from "../../components/MessageList/MessageList";
import ProfileList from "../../components/ProfileList/ProfileList";
import { PageContainer, Aside, Main } from "../StyledPages/StyledPages";

function Discover() {
  const [dataArray, setDataArray] = useState([]);
  const [index, setIndex] = useState(0);

  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
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

  useEffect(() => {
    async function load() {
      try {
        const {
          data: { data },
        } = await axios({
          method: "GET",
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: "/users",
          headers: {},
        });
        setDataArray(data);
        setName(data.name || "");
        setProfilePicture(data.profilePicture || null);
        setVideo(data.video || "");
        setVideoStartMin(data.videoStartMin || 0);
        setVideoStartSec(data.videoStartSec || 0);
        setVideoEndMin(data.videoEndMin || 0);
        setVideoEndSec(data.videoEndSec || 0);
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
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
    load();
  }, []);

  const handleMessage = () => {};

  const handleNext = () => {
    setIndex(index++);
  };

  const youtubeParser = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);

    return match && match[7].length === 11 ? match[7] : false;
  };

  return (
    <div className="discover">
      <PageContainer>
        <Aside>
          <MessageList />
        </Aside>
        <Main>
          <ProfileList
            youtubeParser={youtubeParser}
            dataArray={dataArray}
            handleNext={handleNext}
            index={index}
          />
        </Main>
      </PageContainer>
    </div>
  );
}

export default Discover;
