// Packages
import { useState, useEffect } from 'react';
import axios from 'axios';

// Context
import { useAppContext } from '../../context/app-context';

// Components
import ReadMessageModal from '../../pages/Discover/ReadMessageModal/ReadMessageModal';
import HeaderLeft from '../Headers/HeaderLeft';

// Styles
import {
  MessageListContainer,
  MessageArrayRender,
  SingleMessageContainer,
  ImageContainer,
  ThumbnailContainer,
  EditThumbnail,
  TextContainer,
  SenderName,
  LimitSpan,
  MessageBody,
} from './Styles';

function MessageList() {
  const {
    state: { userData },
  } = useAppContext();
  const { profilePicture } = userData;
  const [messageArray, setMessageArray] = useState([]);
  const [messageInfo, setMessageInfo] = useState({
    showReadMessageModal: false,
  });

  const populateMessage = (messageInfo) => {
    setMessageInfo(messageInfo);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    async function load() {
      try {
        const {
          data: { data },
        } = await axios({
          method: 'GET',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/users/messages',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessageArray(data || []);
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
    load();
  }, []);

  return (
    <MessageListContainer>
      <HeaderLeft profilePicture={profilePicture} />
      {!!messageArray &&
        messageArray.length > 0 &&
        messageArray.map(({ _id, sender, messageBody, timestamp }) => {
          return (
            <MessageArrayRender key={_id}>
              <SingleMessageContainer
                onClick={() =>
                  populateMessage({
                    showReadMessageModal: true,
                    sender: sender.name,
                    senderPhoto: sender.profilePicture,
                    messageBody,
                    timestamp,
                  })
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
        })}
      <ReadMessageModal
        {...messageInfo}
        onClose={() =>
          setMessageInfo({ ...messageInfo, showReadMessageModal: false })
        }
      />
    </MessageListContainer>
  );
}

export default MessageList;
