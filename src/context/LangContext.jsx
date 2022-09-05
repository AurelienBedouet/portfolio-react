import React, { useState, createContext } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [french, setFrench] = useState(false);

  return (
    <LangContext.Provider value={{ french, setFrench }}>
      {children}
    </LangContext.Provider>
  );
};
