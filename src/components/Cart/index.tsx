import { useCart } from "../../providers/Cart";
import { Container } from "./styles";

export const Cart = () => {
  const { showCart, hideCart } = useCart();
  const { cart } = useCart();

  return (
    <Container>
      <div className={hideCart ? "cartContainer" : "cartContainer hidden"}>
        <div className="cartWindow">
          <div className="cartHeader">
            <span className="cartTitle">Carrinho de compras</span>
            <button onClick={showCart}>X</button>
          </div>
          <div className="cartProducts">
            {cart.length === 0 ? (
              <>
                <h3>Seu carrinho está vazio</h3>
                <span>Adicione itens</span>
              </>
            ) : (
              cart.map((product, index) => (
                <div key={index}>
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h3>{product.name}</h3>
                    {/* <div>

                  </div> */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
