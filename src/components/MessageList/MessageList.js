import styled from "styled-components";

import HeaderLeft from "../Headers/HeaderLeft";

const data = [
  {
    sender: "Pepito",
    senderPhoto:
      "https://cdn.iconscout.com/icon/free/png-256/icloud-download-475016.png",
    body: "ke hay wey?",
  },
  {
    sender: "Rayuela",
    senderPhoto: "https://img.icons8.com/pastel-glyph/2x/create-new.png",
    body: "no me dejes en visto wey",
  },
  {
    sender: "Thalia",
    senderPhoto: "https://img.icons8.com/pastel-glyph/2x/create-new.png",
    body: "si no me acuerdo no paso",
  },
  {
    sender: "henry cavill",
    senderPhoto: "https://img.icons8.com/pastel-glyph/2x/create-new.png",
    body: "wyd?",
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

export const SenderName = styled.h3`
`;

export const MessageBody = styled.p`
  opacity: 0.5;
  font-size: 12px;
`;

function MessageList({ profilePicture }) {
  return (
    <MessageListContainer>
      <HeaderLeft profilePicture={profilePicture} />
      <MessageArrayRender>
        {!!data &&
          data.length > 0 &&
          data.map(({ sender, senderPhoto, body }) => {
            return (
              <SingleMessageContainer>
                <ImgContainer>
                  <Img src={senderPhoto} alt="sender" />
                </ImgContainer>
                <TextContainer>
                  <SenderName>{sender}</SenderName>
                  <MessageBody>{body}</MessageBody>
                </TextContainer>
              </SingleMessageContainer>
            );
          })}
      </MessageArrayRender>
    </MessageListContainer>
  );
}

export default MessageList;
