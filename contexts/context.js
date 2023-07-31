import React, { createContext, useState } from "react";

export const LangContext = createContext();

export const ProviderContext = ({ children }) => {
  const [fCoin, setFCoin] = useState(0);
  const [oCoin, setOCoin] = useState(Number(0));
  const [gCoin, setGCoin] = useState(Number(0));

  const [fCoinToday, setFCoinToday] = useState(0);
  const [oCoinToday, setOCoinToday] = useState(0);
  const [gCoinToday, setGCoinToday] = useState(0);
  return (
    <LangContext.Provider
      value={{
        fCoin,
        setFCoin,
        oCoin,
        setOCoin,
        gCoin,
        setGCoin,
        fCoinToday,
        setFCoinToday,
        oCoinToday,
        setOCoinToday,
        gCoinToday,
        setGCoinToday,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
