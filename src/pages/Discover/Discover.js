import { useState, useEffect, useHistory } from "react";
import axios from "axios";
import styled from "styled-components";

import MessageList from "../../components/MessageList/MessageList";
import ProfileList from "../../components/ProfileList/ProfileList";
import { PageContainer, Aside, Main } from "../StyledPages/StyledPages";

function Discover() {
  const [dataArray, setDataArray] = useState([]);
  const [index, setIndex] = useState(1);

  const [profilePicture, setProfilePicture] = useState(null);

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
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
    load();
  }, []);

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
        setProfilePicture(data.profilePicture)
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
    load();
  }, []);

  const handleMessage = () => {};

  const randomizer = () => {
    const totalProfiles = dataArray.length - 1;
    return Math.floor(Math.random() * Math.floor(totalProfiles) + 1);
  };

  const handleNext = () => {
    const newIndex = randomizer();
    if (index < dataArray.length - 1 && index !== newIndex) {
      return setIndex(newIndex);
    }
    if (index === newIndex && index < dataArray.length - 1) {
      return setIndex(index + 1);
    }
    if (index >= dataArray.length - 1) {
      return setIndex(index - 1);
    }
    if (newIndex !== 0) {
      return setIndex(newIndex);
    }
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
          <MessageList
            profilePicture={profilePicture}
          />
        </Aside>
        <Main>
          {!!dataArray.length > 0 && (
            <ProfileList
              youtubeParser={youtubeParser}
              dataArray={dataArray}
              handleNext={handleNext}
              index={index}
            />
          )}
        </Main>
      </PageContainer>
    </div>
  );
}

export default Discover;
