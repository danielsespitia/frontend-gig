import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import styled from "styled-components";

export const MyProfileSettingsContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;

function MyProfileSettings({ handleDelete }) {
  const { logout } = useContext(AuthContext);

  return (
    <MyProfileSettingsContainer>
      <p>Mi Perfil</p>
      <a href="/" onClick={logout}>
        <button>Cerrar Sesion</button>
      </a>
      <div>
        <button onClick={handleDelete}>Eliminar Perfil</button>
      </div>
    </MyProfileSettingsContainer>
  );
}

export default MyProfileSettings;
