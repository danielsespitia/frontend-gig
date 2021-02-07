import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import styled from "styled-components";

import Header from "../Header/Header";

export const MyProfileSettingsContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
`;

function MyProfileSettings({ handleDelete }) {
  const { logout } = useContext(AuthContext);

  return (
    <MyProfileSettingsContainer>
      <Header />
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
