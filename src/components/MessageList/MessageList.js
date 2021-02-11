import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import ReadMessageModal from "../../pages/Discover/ReadMessageModal/ReadMessageModal";

import HeaderLeft from "../Headers/HeaderLeft";

export const MessageListContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
`;

export const MessageArrayRender = styled.div`
  display: inherit;
  flex-direction: column;
  width: 100%;
`;

export const SingleMessageContainer = styled.div`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  display: inherit;
  width: 100%;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  margin-left: 15px;
  display: inherit;
  width: 50px;
  height: 50px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SenderName = styled.h3`
  margin: 0;
`;

export const MessageBody = styled.p`
  margin: 0;
  opacity: 0.5;
  font-size: 12px;
`;

function MessageList({ profilePicture }) {
  const [messageArray, setMessageArray] = useState([]);
  const [state, setState] = useState({ showReadMessageModal: false });
  const onClick = (sender, senderPhoto, messageBody, timestamp) => {
    setState({
      showReadMessageModal: true,
      sender,
      senderPhoto,
      messageBody,
      timestamp,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function load() {
      try {
        const {
          data: { data },
        } = await axios({
          method: "GET",
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: "/users/messages",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessageArray(data || []);
        console.log(messageArray)
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
    load();
  }, []);

  return (
    <MessageListContainer>
      <HeaderLeft profilePicture={profilePicture} />

      {!!messageArray &&
        messageArray.length > 0 &&
        messageArray.map(
          ({ _id, sender, senderPhoto, messageBody, timestamp }) => {
          return (
            <MessageArrayRender key={_id}>
              <SingleMessageContainer
                onClick={() =>
                  onClick(sender.name, sender.profilePicture, messageBody, timestamp)
                }
              >
                <ImgContainer>
                  <Img src={sender.profilePicture} alt="sender" />
                </ImgContainer>
                <TextContainer>
                  <SenderName>{sender.name}</SenderName>
                  <MessageBody>{messageBody}</MessageBody>
                </TextContainer>
              </SingleMessageContainer>
            </MessageArrayRender>
          );
        })}
      <ReadMessageModal
        sender={state.sender}
        senderPhoto={state.senderPhoto}
        messageBody={state.messageBody}
        timestamp={state.timestamp}
        showReadMessageModal={state.showReadMessageModal}
        onClose={() => setState({ showReadMessageModal: false })}
      />
    </MessageListContainer>
  );
}

export default MessageList;
