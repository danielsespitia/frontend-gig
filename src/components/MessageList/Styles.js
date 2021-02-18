import styled from 'styled-components';

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