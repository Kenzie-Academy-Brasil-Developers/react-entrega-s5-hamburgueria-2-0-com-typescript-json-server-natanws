import { Cart } from "../../components/Cart";
import { MenuHeader } from "../../components/MenuHeader";
import { ProductsList } from "../../components/ProductsList";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <MenuHeader />
      <ProductsList />
      <Cart />
    </Container>
  );
};
