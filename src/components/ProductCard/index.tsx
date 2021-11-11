import { useCart } from "../../providers/Cart";
import { Card } from "./styles";

interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

export const ProductCard = ({ name, price, image, type }: Product) => {
  const { addToCart } = useCart();
  return (
    <Card>
      <div className="imageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="infoContainer">
        <h2>{name}</h2>
        <span className="type">{type}</span>
        <span className="price">
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
        <button onClick={() => addToCart({ name, price, image, type })}>
          Adicionar
        </button>
      </div>
    </Card>
  );
};
