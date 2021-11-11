import { BiShoppingBag } from "react-icons/bi";
import Logo from "../../assets/images/BurgerKenzieLogo.png";
import { IntroContainer } from "./styles";

export const BKIntro = () => {
  return (
    <IntroContainer>
      <img src={Logo} alt="Burguer Kenzie" />
      <div>
        <div className="description">
          <div className="containerSVG">
            <BiShoppingBag />
          </div>
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong className="highlight">melhores</strong> ingredientes.
          </span>
        </div>
      </div>
    </IntroContainer>
  );
};
