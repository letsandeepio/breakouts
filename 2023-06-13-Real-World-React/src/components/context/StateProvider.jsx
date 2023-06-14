import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const logIn = () => {
    setUserLoggedIn(true);
  };

  const logOut = () => {
    setUserLoggedIn(false);
  };

  return (
    <StateContext.Provider value={{ userLoggedIn, logIn, logOut }}>
      {children}
    </StateContext.Provider>
  );
};

// custom hook

export const useContextValue = () => useContext(StateContext);
