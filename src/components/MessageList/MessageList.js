// Packages
import { useState, useEffect } from 'react';
import axios from 'axios';

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
