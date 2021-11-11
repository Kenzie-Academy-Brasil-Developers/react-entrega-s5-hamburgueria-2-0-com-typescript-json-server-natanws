import { ProductCard } from "../ProductCard";
import { Container } from "./styles";
import { useProducts } from "../../providers/Products";

export const ProductsList = () => {
  const { products } = useProducts();
  return (
    <Container>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
          type={product.type}
        />
      ))}
    </Container>
  );
};
