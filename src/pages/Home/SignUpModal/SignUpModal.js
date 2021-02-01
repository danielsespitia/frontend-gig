import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../store/AuthContext";
import axios from "axios";

import { SignUpForm } from "../../../components/Modals/SignUpForm/SignUpForm";

function SignUpModal() {
  const history = useHistory();
  const { isAuthenticated } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "terms":
        setTerms(checked);
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
          method: "POST",
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `/users/sign-up`,
          data: { name, password, email, terms },
        });
        localStorage.setItem("token", token);
        const pathUser = "app/profile/edit";
        localStorage.setItem("pathUser", pathUser);
        isAuthenticated(token, pathUser);
        history.push(`${pathUser}`);
      } catch (err) {
        setErrors({ account: "No se pudo crear tu cuenta" });
      }
    }
  };

  const validate = () => {
    const arePasswordEqual =
      !!password && !!confirmPassword && password === confirmPassword;

    if (!arePasswordEqual) {
      setErrors({ password: "La contraseñas no coinciden!" });
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
