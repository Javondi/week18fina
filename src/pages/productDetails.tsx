import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext, Product } from "../App"; // Use AppContext and Product

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Correct typing for useParams
  const context = useContext(AppContext); // Access AppContext

  if (!context) {
    return <p>Context is undefined. Please ensure the provider is properly set up.</p>;
  }

  const { products } = context; // Destructure products from context

  // Find the product by ID
  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
