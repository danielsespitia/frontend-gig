// Packages
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InAppHeader = styled.header`
  width: 100%;
  display: inherit;
  height: 60px;
  justify-content: center;
`;

export const LogoContainer = styled(Link)`
  display: inherit;
`;

export const Logo = styled.img`
  align-self: center;
  opacity: 0.5;
  width: 30px;
  height: 30px;
`;
