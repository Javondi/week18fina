interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
