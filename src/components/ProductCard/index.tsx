import { Card } from "./styles";

interface Product {
  name: string;
  price: string;
  image: string;
  type: string;
}

export const ProductCard = ({ name, price, image, type }: Product) => {
  return (
    <Card>
      <div className="imageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="infoContainer">
        <h2>{name}</h2>
        <span className="type">{type}</span>
        <span className="price">{price}</span>
        <button>Adicionar</button>
      </div>
    </Card>
  );
};
