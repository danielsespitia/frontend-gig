import { useState } from "react";

import styled from "styled-components";
import ReadMessageModal from "../../pages/Discover/ReadMessageModal/ReadMessageModal";

import HeaderLeft from "../Headers/HeaderLeft";

const data = [
  {
    sender: "Pepito",
    senderPhoto:
      "https://cdn.iconscout.com/icon/free/png-256/icloud-download-475016.png",
    messageBody: "ke hay wey?",
    timestamp: "08/02/2021 14:22",
  },
  {
    sender: "Rayuela",
    senderPhoto: "https://img.icons8.com/pastel-glyph/2x/create-new.png",
    body: "no me dejes en visto wey",
    timestamp: "10/02/2021 13:22",
  },
  {
    sender: "Thalia",
    senderPhoto: "https://img.icons8.com/pastel-glyph/2x/create-new.png",
    messageBody: "si no me acuerdo no paso",
    timestamp: "10/02/2021 13:22",
  },
  {
    sender: "henry cavill",
    senderPhoto: "https://img.icons8.com/pastel-glyph/2x/create-new.png",
    messageBody: "wyd?",
    timestamp: "10/02/2021 13:22",
  },
];

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
  width: 100%;
`;

export const SenderName = styled.h3``;

export const MessageBody = styled.p`
  opacity: 0.5;
  font-size: 12px;
`;

function MessageList({ profilePicture }) {
  const [showReadMessageModal, setShowReadMessageModal] = useState(false);
  const onClick = () => {
    setShowReadMessageModal(true);
  };

  return (
    <MessageListContainer>
      <HeaderLeft profilePicture={profilePicture} />
      <MessageArrayRender>
        {!!data &&
          data.length > 0 &&
          data.map(({ sender, senderPhoto, messageBody, timestamp }) => {
            return (
              <>
                <SingleMessageContainer onClick={onClick}>
                  <ImgContainer>
                    <Img src={senderPhoto} alt="sender" />
                  </ImgContainer>
                  <TextContainer>
                    <SenderName>{sender}</SenderName>
                    <MessageBody>{messageBody}</MessageBody>
                  </TextContainer>
                </SingleMessageContainer>
                <ReadMessageModal
                  sender={sender}
                  senderPhoto={senderPhoto}
                  messageBody={messageBody}
                  timestamp={timestamp}
                  showReadMessageModal={showReadMessageModal}
                  setShowReadMessageModal={setShowReadMessageModal}
                />
              </>
            );
          })}
      </MessageArrayRender>
    </MessageListContainer>
  );
}

export default MessageList;
