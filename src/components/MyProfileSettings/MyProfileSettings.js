import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import styled from "styled-components";

import HeaderLeft from "../Headers/HeaderLeft";
import { ButtonContainer } from "../StyledComponents/StyledCard";

export const MyProfileSettingsContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
`;

export const MembershipContainer = styled.div`
  display: inherit;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const P = styled.p`
  margin: 0;
  margin-top: 10px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  opacity: 0.5;
`;

export const SettingsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Settings = styled.p`
  opacity: 0.7;
  display: flex;
  align-self: flex-start;
  margin: 0;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const A = styled.a`
  opacity: 0.5;
  color: black;
  margin: 0;
  border-bottom: 1px solid lightgray;
  width: 100%;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NewButtonContainer = styled.button`
  margin-top: 20px;
  height: 40px;
  background-color: white;
  color: red;
  border: none;
`;

function MyProfileSettings({
  profilePicture,
  email,
  premiumAccount,
  handleDelete,
}) {
  const { logout } = useContext(AuthContext);

  return (
    <MyProfileSettingsContainer>
      <HeaderLeft profilePicture={profilePicture} />
      <Settings>Ajustes de Cuenta</Settings>
      <SettingsContainer>
        <A href="/app/discover/">Descubre Musicos</A>
        <A href="/" onClick={logout}>
          Cerrar Sesion
        </A>
        <P>Correo Electronico: {email}</P>
      </SettingsContainer>
      <NewButtonContainer onClick={handleDelete}>
        Eliminar Perfil
      </NewButtonContainer>
    </MyProfileSettingsContainer>
  );
}

export default MyProfileSettings;
