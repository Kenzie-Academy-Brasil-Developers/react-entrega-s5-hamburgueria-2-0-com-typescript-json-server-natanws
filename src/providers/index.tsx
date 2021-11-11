import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
