import { ProductCard } from "../ProductCard";
import { Container } from "./styles";
import TempProduct from "../../assets/products/big-kenzie.png";

export const ProductsList = () => {
  return (
    <Container>
      <ProductCard
        image={TempProduct}
        name="Big Kenzie"
        price={new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(18.0)}
        type="Sanduíches"
      />
    </Container>
  );
};
