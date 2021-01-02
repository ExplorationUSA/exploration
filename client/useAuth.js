import React, { useContext, createContext, useState, useEffect } from 'react';

const authContext = createContext();

const useProvideAuth = () => {
  const [user, setUser] = useState({
    userId: null,
    userName: '',
    isAuthenticated: false,
  });
  const signInFunc = (userId, userName, cb) => {
    setUser({
      ...user,
      userId,
      userName,
      isAuthenticated: true,
    });
    cb();
  };
  const signOutFunc = (cb) => {
    setUser({
      ...user,
      userId: null,
      userName: '',
      isAuthenticated: false,
    });
    cb();
  };
  useEffect(() => {
    fetch('/api/member/status')
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.json().then((data) => {
          throw data;
        });
      })
      .then(({ message, user }) => {
        setUser({
          ...user,
          userId: user.id,
          userName: user.username,
          isAuthenticated: true,
        });
      })
      .catch((error) => console.log(error));
    return () => {};
  }, []);
  return { user, signInFunc, signOutFunc };
};

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
