import { createContext, useContext, useEffect, useState } from "react";

const CelebrationContext = createContext();

export const CelebrationProvider = ({ children }) => {
  const [celebrationCart, setCelebrationCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(celebrationCart));
  }, [celebrationCart]);

  return (
    <CelebrationContext.Provider
      value={{ celebrationCart, setCelebrationCart }}
    >
      {children}
    </CelebrationContext.Provider>
  );
};

export const useCelebrationCart = () => useContext(CelebrationContext);
