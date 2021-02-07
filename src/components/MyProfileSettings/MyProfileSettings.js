import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

function MyProfileSettings({ handleDelete }) {
  const { logout } = useContext(AuthContext);

  return (
    <ProfileContainer>
      <p>Mi Perfil (settings)</p>
      <a href="/" onClick={logout}>
        <button>Cerrar Sesion</button>
      </a>
      <button onClick={handleDelete}>Eliminar Perfil</button>
    </ProfileContainer>
  );
}

export default MyProfileSettings;
