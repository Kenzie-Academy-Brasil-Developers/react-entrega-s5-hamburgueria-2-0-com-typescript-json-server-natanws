import React, { createContext, ReactNode, useContext, useState } from "react";

interface AuthProviderData {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

interface AuthProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("@KenzieBurger") || ""
  );

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (isLoggedIn === false) {
    setIsLoggedIn(true);
  }
  return (
    <AuthContext.Provider
      value={{ token, setToken, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
