import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../store/AuthContext";
import axios from "axios";

import { LogInForm } from "../../../components/Modals/LogInForm/LogInForm";

function LogInModal() {
  const history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
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
        method: "POST",
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users/sign-in`,
        data: { email, password },
      });
      localStorage.setItem("token", token);
      const pathUser = "app/profile/edit";
      localStorage.setItem("pathUser", pathUser);
      isAuthenticated(token, pathUser);
      setMessage("Inicio de sesion exitoso");
      history.push(`${pathUser}`);
    } catch (err) {
      localStorage.removeItem("token");
      setErrors({ login: "Usuario o contraseña incorrectos" });
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
