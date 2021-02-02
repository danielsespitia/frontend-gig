import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

function MyProfileSettings() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <div>
        <p>Mi Perfil (settings)</p>
        <a href="/" onClick={logout}>
          <button>Cerrar Sesion</button>
        </a>
      </div>
    </>
  );
}

export default MyProfileSettings;
