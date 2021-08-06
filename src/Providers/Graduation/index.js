import { createContext, useContext, useEffect, useState } from "react";

const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
  const [graduationCart, setGraduationCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(graduationCart));
  }, [graduationCart]);

  return (
    <GraduationContext.Provider value={{ graduationCart, setGraduationCart }}>
      {children}
    </GraduationContext.Provider>
  );
};

export const useGraduationCart = () => useContext(GraduationContext);
