import styled from 'styled-components';

export const InAppHeader = styled.header`
  width: 100%;
  display: inherit;
  height: 60px;
  justify-content: center;
`;

export const LogoContainer = styled.a`
  display: inherit;
`;

export const Logo = styled.img`
  align-self: center;
  opacity: 0.5;
  width: 30px;
  height: 30px;
`;

function HeaderRight() {
  return (
    <InAppHeader>
      <LogoContainer href="/app/discover">
        <Logo
          src="https://res.cloudinary.com/danielsespitia/image/upload/v1613018925/User-ProfilePicture/LOGO_Mesa_de_trabajo_1_f7jjzr.png"
          alt="logo"
        />
      </LogoContainer>
    </InAppHeader>
  );
}

export default HeaderRight;
