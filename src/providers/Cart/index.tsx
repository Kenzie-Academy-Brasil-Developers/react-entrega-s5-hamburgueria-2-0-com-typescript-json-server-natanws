import React, { createContext, ReactNode, useState } from "react";

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
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
