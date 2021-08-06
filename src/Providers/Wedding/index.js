import { createContext, useContext, useEffect, useState } from "react";

const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingCart, setWeddingCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(weddingCart));
  }, [weddingCart]);

  return (
    <WeddingContext.Provider value={{ weddingCart, setWeddingCart }}>
      {children}
    </WeddingContext.Provider>
  );
};

export const useWeddingCart = () => useContext(WeddingContext);
