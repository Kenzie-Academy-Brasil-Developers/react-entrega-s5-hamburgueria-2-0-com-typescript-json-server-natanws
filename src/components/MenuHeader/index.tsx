import { BiCart } from "react-icons/bi";
import Logo from "../../assets/images/BurgerKenzieLogo.png";
import { useCart } from "../../providers/Cart";
import { LogInOut } from "../LogInOut";
import { Search } from "../Search";
import { Container } from "./styles";

export const MenuHeader = () => {
  const { showCart } = useCart();

  return (
    <Container>
      <img src={Logo} alt="Burger Kenzie" />
      <div>
        <Search />
        <button onClick={showCart}>
          <BiCart />
        </button>
        <LogInOut />
      </div>
    </Container>
  );
};
