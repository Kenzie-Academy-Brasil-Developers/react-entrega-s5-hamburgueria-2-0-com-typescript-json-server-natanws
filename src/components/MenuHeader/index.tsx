import { BiCart } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/BurgerKenzieLogo.png";
import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";
import { LogInOut } from "../LogInOut";
import { Search } from "../Search";
import { Container } from "./styles";

export const MenuHeader = () => {
  const { showCart } = useCart();
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    history.push("/");
  };

  const logIn = () => {
    history.push("/login");
  };

  return (
    <Container>
      <img src={Logo} alt="Burger Kenzie" />
      <div>
        <Search />
        <button onClick={showCart}>
          <BiCart />
        </button>
        <button onClick={isLoggedIn ? logOut : logIn}>
          <LogInOut />
        </button>
      </div>
    </Container>
  );
};
