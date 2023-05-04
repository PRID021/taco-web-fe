import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [contentOverlay, setContentOverlay] = useState(null);
  return (
    <AppContext.Provider value={{ showOverlay, setShowOverlay,contentOverlay, setContentOverlay }}>
      {children}
    </AppContext.Provider>
  );
};
