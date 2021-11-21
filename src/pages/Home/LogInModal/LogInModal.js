// Packages
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Context
import { AuthContext } from '../../../store/AuthContext';
import { useAppContext } from '../../../context/app-context';

// Components
import { LogInForm } from '../../../components/Modals/LogInForm/LogInForm';

function LogInModal() {
  const history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);
  const {
    state: { userData },
    setUserData,
    setUserAuthentication,
  } = useAppContext();
  const { email } = userData;
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setUserData({ ...userData, email: value });
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await axios({
        method: 'POST',
        baseURL: 'http://localhost:8000',
        url: `/users/sign-in`,
        data: { email, password },
      });

      const pathUser = 'app/discover/';

      localStorage.setItem('token', token);
      localStorage.setItem('pathUser', pathUser);

      isAuthenticated(token, pathUser);
      setUserAuthentication(true);

      setMessage('Inicio de sesion exitoso');

      history.push(`${pathUser}`);
    } catch (err) {
      localStorage.removeItem('token');
      setErrors({ login: 'Usuario o contraseña incorrectos' });
    }
  };

  return (
    <>
      <LogInForm
        message={message}
        email={email}
        password={password}
        errorsLogIn={errors.login}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default LogInModal;
