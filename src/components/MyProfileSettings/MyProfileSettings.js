import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import styled from "styled-components";

import HeaderLeft from "../Headers/HeaderLeft";

export const MyProfileSettingsContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
`;

export const MembershipContainer = styled.div`
  display: inherit;
  align-self: center;
`;

function MyProfileSettings({ premiumAccount, handleDelete }) {
  const { logout } = useContext(AuthContext);

  return (
    <MyProfileSettingsContainer>
      <HeaderLeft />
      <a href="/" onClick={logout}>
        <button>Cerrar Sesion</button>
      </a>
      <div>
        <button onClick={handleDelete}>Eliminar Perfil</button>
      </div>
      <MembershipContainer>
        <p>
          <strong>Membresia:</strong> {premiumAccount ? "Premium" : "Gratuita"}
        </p>
      </MembershipContainer>
    </MyProfileSettingsContainer>
  );
}

export default MyProfileSettings;
