import { useCart } from "../../providers/Cart";
import { Container } from "./styles";

export const Cart = () => {
  const { showCart, hideCart } = useCart();

  return (
    <Container>
      <div className={hideCart ? "cartContainer" : "cartContainer hidden"}>
        <div className="cartWindow">
          <div className="cartHeader">
            <span className="cartTitle">Carrinho de compras</span>
            <button onClick={showCart}>X</button>
          </div>
          <div className="cartProducts">
            <h3>Seu carrinho está vazio</h3>
            <span>Adicione itens</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
