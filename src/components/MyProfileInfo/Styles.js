// Packages
import styled from 'styled-components';

// Styles
import { ButtonContainer } from '../StyledComponents/StyledCard';

export const ButtonContainerEditInfo = styled(ButtonContainer)`
  margin-top: 70px;
`;

export const DataItem = styled.div`
  grid-row-gap: 5px;
`;

export const ImageContainer = styled.div`
  display: inherit;
  justify-content: center;
`;

export const ThumbnailContainer = styled.div`
  display: inherit;
  height: 150px;
  width: 150px;
  justify-content: center;
  border-radius: 50px;
`;

export const EditThumbnail = styled.img`
  display: inherit;
  justify-self: center;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const FirstCard = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondCard = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SubInfoContainer = styled.div`
  display: flex;
  max-width: 280px;
  flex-direction: column;
`;

export const SocialContainer = styled(SubInfoContainer)`
  flex-direction: row;
`;

export const FirstTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

export const NameCity = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const RolGenre = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  align-items: flex-end;
`;

export const Name = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const H3 = styled.h3`
  padding-bottom: 1px;
  font-size: 16px;
  opacity: 0.5;
  margin: 0;
  margin-left: 5px;
`;

export const H32 = styled.h3`
  font-size: 16px;
  opacity: 0.5;
  margin: 0;
`;

export const H322 = styled.h3`
  font-size: 14px;
  opacity: 0.4;
  margin: 0;
  padding-bottom: 1px;
  margin-left: 4px;
`;

export const H33 = styled.h3`
  font-size: 14px;
  opacity: 0.5;
  margin: 0;
`;

export const P = styled.p`
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const A = styled.a`
  height: 50px;
  width: 50px;
  margin: 0;
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

export const ThirdCard = styled(SecondCard)`
  border-bottom: 0px solid grey;
`;