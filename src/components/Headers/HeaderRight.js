import { Link } from 'react-router-dom'
import { gigLogo } from '../../pages/StyledPages/StyledPages';
import { InAppHeader, LogoContainer, Logo } from './HeaderRightStyles';

function HeaderRight() {
  return (
    <InAppHeader>
      <LogoContainer>
        <Link to="/app/discover"/>
        <Logo src={gigLogo} alt="logo" />
      </LogoContainer>
    </InAppHeader>
  );
}

export default HeaderRight;
