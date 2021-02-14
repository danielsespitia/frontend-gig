import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import styled from 'styled-components';

import HeaderLeft from '../Headers/HeaderLeft';

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
  margin-left: 15px;
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
      <a href="/app/discover/">
        <button>Pagina Principal</button>
      </a>
      <a href="/" onClick={logout}>
        <button>Cerrar Sesion</button>
      </a>
      <div>
        <button onClick={handleDelete}>Eliminar Perfil</button>
      </div>
      <MembershipContainer>
        <P>
          <strong>Membresia:</strong> {premiumAccount ? 'Premium' : 'Gratuita'}
        </P>
        <P>
          <strong>Correo Electronico:</strong> {email}
        </P>
      </MembershipContainer>
    </MyProfileSettingsContainer>
  );
}

export default MyProfileSettings;
