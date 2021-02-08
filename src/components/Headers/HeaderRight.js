import styled from "styled-components";

export const InAppHeader = styled.header`
  width: 100%;
  display: inherit;
  height: 60px;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: inherit;
`;

export const Logo = styled.img`
  opacity: 0.5;
  width: 50px;
  height: 50px;
`;

function HeaderRight() {
  return (
    <InAppHeader>
      <LogoContainer>
        <Logo
          src="https://static.thenounproject.com/png/3097969-200.png"
          alt="logo"
        />
      </LogoContainer>
    </InAppHeader>
  );
}

export default HeaderRight;
