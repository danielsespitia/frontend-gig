// Packages
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Context
import { AuthContext } from '../../store/AuthContext';
import { useAppContext } from '../../context/app-context';

// Components
import HeaderLeft from '../Headers/HeaderLeft';

// Styles
import {
  MyProfileSettingsContainer,
  Settings,
  SettingsContainer,
  Anchor,
  Paragraph,
  NewButtonContainer,
} from './Styles';

function MyProfileSettings() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const {
    state: { userData },
  } = useAppContext();
  const { email, premiumAccount } = userData;

  const handleDelete = async (e) => {
    try {
      const token = localStorage.getItem('token');
      axios({
        method: 'DELETE',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem('token');
      logout();

      alert('Tu cuenta fue eliminada');
      history.push('/');
    } catch (err) {
      alert('Tu cuenta no pudo ser eliminada', err);
    }
  };

  return (
    <MyProfileSettingsContainer>
      <HeaderLeft />
      <Settings>Ajustes de Cuenta</Settings>
      <SettingsContainer>
        <Anchor to="/app/discover/">Descubre Musicos</Anchor>
        <Anchor to="/" onClick={logout}>
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
