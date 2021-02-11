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
  display: inherit;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: inherit;
  justify-content: center;
`;

export const ThumbnailContainer = styled.div`
  margin-left: 15px;
  display: inherit;
  height: 80px;
  width: 80px;
  justify-content: center;
  border-radius: 50px;
  border: solid 1px lightgray;
`;

export const EditThumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  padding-left: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SenderName = styled.h3`
  margin: 0;
`;

export const LimitSpan = styled.span`
  display: inherit;
  max-width: 26ch;
`;

export const MessageBody = styled.p`
  white-space: nowrap;
  max-width: 200px;
  display: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
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
          ({ _id, sender, messageBody, timestamp }) => {
            return (
              <MessageArrayRender key={_id}>
                <SingleMessageContainer
                  onClick={() =>
                    onClick(
                      sender.name,
                      sender.profilePicture,
                      messageBody,
                      timestamp
                    )
                  }
                >
                  <ImageContainer>
                    <ThumbnailContainer>
                      <EditThumbnail src={sender.profilePicture} alt="sender" />
                    </ThumbnailContainer>
                  </ImageContainer>
                  <TextContainer>
                    <SenderName>{sender.name}</SenderName>
                    <LimitSpan>
                      <MessageBody>{messageBody}</MessageBody>
                    </LimitSpan>
                  </TextContainer>
                </SingleMessageContainer>
              </MessageArrayRender>
            );
          }
        )}
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
