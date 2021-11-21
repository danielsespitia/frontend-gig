// Packages
import styled from 'styled-components';

// Styles
import { ButtonContainer } from '../StyledComponents/StyledCard';

export const ButtonContainerEditInfo = styled(ButtonContainer)`
  margin-top: 70px;
`;

export const Form = styled.form`
  display: inherit;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-self: center;
`;

export const MyProfileContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const EditThumbnailContainer = styled.div`
  height: 80px;
  width: 80px;
`;

export const EditThumbnail = styled.img`
  justify-self: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const VideoFragmentContainer = styled.div`
  display: inherit;
`;

export const VideoStartContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const StartTimestampContainer = styled.div`
  display: inherit;
  flex-direction: row;
`;

export const VideoEndContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const EndTimestampContainer = styled.div`
  display: inherit;
  flex-direction: row;
`;

export const Label = styled.label`
  display: inherit;
`;

export const Input = styled.input`
  display: inherit;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.5);
  width: 85%;
`;

export const TextArea = styled.textarea`
  display: inherit;
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.5);
  width: 85%;
`;

export const Select = styled.select`
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: #ffffff;
  color: #6c757d;
`;
