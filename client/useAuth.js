import React, { useContext, createContext, useState} from 'react';

const authContext = createContext();

const useProvideAuth = () => {
  const [user, setUser] = useState({userId: null, userName: '', isAuthenticated: false });
  const signInFunc = (userId, userName, cb) => {
    setUser({
      ...user, userId, userName, isAuthenticated: true,
    });
    cb();
  };
  const signOutFunc = (cb) => {
    setUser({
      ...user, userId: null, userName: '', isAuthenticated: false,
    });
    cb();
  };
  return { user, signInFunc, signOutFunc };
};

export function ProvideAuth({ children }) {
  // const authContext = createContext();
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);