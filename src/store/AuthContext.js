import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isToken, setIsToken] = useState(null);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  const isAuthenticated = (token, pathUser) => {
    setIsToken(token);
    setUser(pathUser);
    setMessage("Log In exitoso");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const pathUser = localStorage.getItem("pathUser");
    setIsToken(token);
    setUser(pathUser);
  }, []);

  const logout = () => {
    setIsToken(null);
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        isToken,
        user,
        message,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
