import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

import HeaderLeft from '../Headers/HeaderLeft';

import {
  MyProfileSettingsContainer,
  Settings,
  SettingsContainer,
  Anchor,
  Paragraph,
  NewButtonContainer,
} from './Styles';

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
        <Anchor href="/app/discover/">Descubre Musicos</Anchor>
        <Anchor href="/" onClick={logout}>
          Cerrar Sesion
        </Anchor>
        <Paragraph>Correo Electronico: {email}</Paragraph>
        <Paragraph>Membresia: {premiumAccount}</Paragraph>
      </SettingsContainer>
      <NewButtonContainer onClick={handleDelete}>
        Eliminar Perfil
      </NewButtonContainer>
    </MyProfileSettingsContainer>
  );
}

export default MyProfileSettings;
