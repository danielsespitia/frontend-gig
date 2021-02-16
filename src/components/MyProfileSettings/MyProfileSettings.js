import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';

import HeaderLeft from '../Headers/HeaderLeft';

import { ComponentContainer } from '../StyledComponents/StyledCard';
import { MembershipContainer, ProfileSettingsText } from "./Styles"

function MyProfileSettings({
  profilePicture,
  email,
  premiumAccount,
  handleDelete,
}) {
  const { logout } = useContext(AuthContext);

  return (
    <ComponentContainer>
      <HeaderLeft profilePicture={profilePicture} />
      <a href="/app/discover/">
        <button>Página Principal</button>
      </a>
      <a href="/" onClick={logout}>
        <button>Cerrar Sesión</button>
      </a>
      <div>
        <button onClick={handleDelete}>Eliminar Perfil</button>
      </div>
      <MembershipContainer>
        <ProfileSettingsText>
          <strong>Membresía:</strong> {premiumAccount ? 'Premium' : 'Gratuita'}
        </ProfileSettingsText>
        <ProfileSettingsText>
          <strong>Correo Electrónico:</strong> {email}
        </ProfileSettingsText>
      </MembershipContainer>
    </ComponentContainer>
  );
}

export default MyProfileSettings;
