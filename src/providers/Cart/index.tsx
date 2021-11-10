import React, { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  name: string;
  price: number;
  type: string;
  image: string;
}

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  setCart: (value: []) => void;
  hideCart: boolean;
  showCart: () => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [hideCart, setHideCart] = useState<boolean>(false);

  const showCart = () => {
    setHideCart(!hideCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, hideCart, showCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
