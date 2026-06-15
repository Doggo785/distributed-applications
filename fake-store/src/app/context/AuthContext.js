"use client";
import { createContext, useContext, useState } from "react";
import { loginUser } from "../../utils/api";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [authError, setAuthError] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    setAuthError(null); // Réinitialisation de l'erreur
    try {
      const data = await loginUser(email, password);
      if (data && data.token) {
        setAccessToken(data.token);
        router.push("/profile"); // Redirection vers la page protégée
      }
    } catch (error) {
      setAuthError("Échec de la connexion. Vérifie tes identifiants.");
    }
  };

  const logout = () => {
    setAccessToken(null);
    router.push("/login"); // Expulsion vers la page de login
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
