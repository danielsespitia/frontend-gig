import styled from "styled-components";

export const ProfileListContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: inherit;
  flex-direction: row;
`;

export const ButtonContainer = styled.div`
  display: inherit;
  margin-left: 5px;
  margin-right: 5px;
`;

function ProfileList() {
  return (
    <ProfileListContainer>
      <p>Descubre</p>
      <ButtonsContainer>
        <ButtonContainer>
          <button>Siguiente</button>
        </ButtonContainer>
        <ButtonContainer>
          <button>Enviar Mensaje</button>
        </ButtonContainer>
        <ButtonContainer>
          <button>Reportar</button>
        </ButtonContainer>
      </ButtonsContainer>
    </ProfileListContainer>
  );
}

export default ProfileList;
