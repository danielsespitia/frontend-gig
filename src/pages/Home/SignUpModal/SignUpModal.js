// Packages
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Context
import { AuthContext } from '../../../store/AuthContext';
import { useAppContext } from '../../../context/app-context';

// Components
import { SignUpForm } from '../../../components/Modals/SignUpForm/SignUpForm';

function SignUpModal() {
  const history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);
  const {
    state: { userData },
    setUserData,
    setUserAuthentication,
  } = useAppContext();
  const { name, email, terms } = userData;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    //TODO: Refactor to remove switch statement
    switch (name) {
      case 'name':
        setUserData({ ...userData, name: value });
        break;
      case 'email':
        setUserData({ ...userData, email: value });
        break;
      case 'terms':
        setUserData({ ...userData, terms: checked });
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const {
          data: { token },
        } = await axios({
          method: 'POST',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `/users/sign-up`,
          data: { name, password, email, terms },
        });

        const pathUser = 'app/profile/edit';

        localStorage.setItem('token', token);
        localStorage.setItem('pathUser', pathUser);

        isAuthenticated(token, pathUser);
        setUserAuthentication(true);

        history.push(`${pathUser}`);
      } catch (err) {
        setErrors({ account: 'No se pudo crear tu cuenta' });
        console.log(err);
      }
    }
  };

  const validate = () => {
    const arePasswordsEqual =
      !!password && !!confirmPassword && password === confirmPassword;

    if (!arePasswordsEqual) {
      setErrors({ password: 'La contraseñas no coinciden!' });
      return false;
    }
    return true;
  };

  return (
    <>
      <SignUpForm
        name={name}
        password={password}
        confirmPassword={confirmPassword}
        email={email}
        terms={terms}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errorsPassword={errors.password}
        errorsAccount={errors.account}
      />
    </>
  );
}

export default SignUpModal;
