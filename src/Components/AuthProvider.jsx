import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);

const isAExistingCookie = (name) =>  {
  const cookieNames = document.cookie.split(";").map(x => x.split("=")[0]);
  return cookieNames.includes(name);
}

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuth = async () => {
      const cookieExists = isAExistingCookie("auth-login")
      setAuth(cookieExists);
      setUser(cookieExists ? "maria" : null);
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;