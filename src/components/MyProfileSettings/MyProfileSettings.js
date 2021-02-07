import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: inherit;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function MyProfileSettings({ handleDelete }) {
  const { logout } = useContext(AuthContext);

  return (
    <ProfileContainer>
      <p>Mi Perfil</p>
      <a href="/" onClick={logout}>
        <button>Cerrar Sesion</button>
      </a>
      <div>
        <button onClick={handleDelete}>Eliminar Perfil</button>
      </div>
    </ProfileContainer>
  );
}

export default MyProfileSettings;
