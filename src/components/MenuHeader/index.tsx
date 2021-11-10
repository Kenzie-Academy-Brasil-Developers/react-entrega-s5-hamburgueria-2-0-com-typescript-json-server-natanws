import { BiCart } from "react-icons/bi";
import Logo from "../../assets/images/BurgerKenzieLogo.png";
import { LogInOut } from "../LogInOut";
import { Search } from "../Search";
import { Container } from "./styles";

export const MenuHeader = () => {
  return (
    <Container>
      <img src={Logo} alt="Burger Kenzie" />
      <div>
        <Search />
        <BiCart />
        <LogInOut />
      </div>
    </Container>
  );
};
