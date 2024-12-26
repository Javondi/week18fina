import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Home: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    return <p>Context is undefined. Please ensure the provider is properly set up.</p>;
  }

  const { products } = context;

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    job: "",
  });

  const [submittedData, setSubmittedData] = useState<
    { name: string; price: string; quantity: string; job: string }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.quantity || !formData.job) {
      alert("Please fill in all fields.");
      return;
    }

    // Add submitted data to the list
    setSubmittedData((prev) => [...prev, formData]);

    // Reset form
    setFormData({
      name: "",
      price: "",
      quantity: "",
      job: "",
    });
  };

  return (
    <div>
      <h1>Available Products</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${Number(product.price).toFixed(2) || "0.00"}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))
      )}

      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter the price"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter the quantity"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Job:
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Enter the job"
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Information</h2>
      {submittedData.length === 0 ? (
        <p>No data submitted yet.</p>
      ) : (
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>
              <p>
                <strong>Name:</strong> {data.name}
              </p>
              <p>
                <strong>Price:</strong> ${Number(data.price).toFixed(2)}
              </p>
              <p>
                <strong>Quantity:</strong> {data.quantity}
              </p>
              <p>
                <strong>Job:</strong> {data.job}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
