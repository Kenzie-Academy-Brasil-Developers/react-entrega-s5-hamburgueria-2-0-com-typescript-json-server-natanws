import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";

interface Product {
  name: string;
  price: number;
  type: string;
  image: string;
}

interface ProductsProps {
  children: ReactNode;
}

interface ProductsProviderData {
  products: Product[];
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response: any) => setProducts([...response.data]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
