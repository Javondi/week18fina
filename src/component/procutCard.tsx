interface Product {
  id: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {/* Render more product details here */}
    </div>
  );
};

export default ProductCard;
