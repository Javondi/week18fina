import React, { useContext, useState } from "react";
import { AppContext, Preorder } from "../App";

const PreorderManagement: React.FC = () => {
  const context = useContext(AppContext);

  const [newPreorder, setNewPreorder] = useState<Preorder>({
    id: "",
    productId: "",
    customerName: "",
    email: "",
  });

  const [localPreorders, setLocalPreorders] = useState<Preorder[]>([]);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { preorders } = context;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPreorder({ ...newPreorder, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a unique ID for the new preorder
    const id = (Math.random() * 10000).toFixed(0);

    const preorderToAdd: Preorder = {
      ...newPreorder,
      id,
    };

    // Add the new preorder to the local state
    setLocalPreorders((prev) => [...prev, preorderToAdd]);

    // Clear the form
    setNewPreorder({ id: "", productId: "", customerName: "", email: "" });
  };

  return (
    <div>
      <h1>Manage Preorders</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          value={newPreorder.productId}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={newPreorder.customerName}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newPreorder.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Existing Preorders</h2>
      <ul>
        {preorders.map((preorder) => (
          <li key={preorder.id}>
            <strong>Product ID:</strong> {preorder.productId}, 
            <strong> Customer Name:</strong> {preorder.customerName}, 
            <strong> Email:</strong> {preorder.email}
          </li>
        ))}
      </ul>

      <h2>New Preorders</h2>
      <ul>
        {localPreorders.map((preorder) => (
          <li key={preorder.id}>
            <strong>Product ID:</strong> {preorder.productId}, 
            <strong> Customer Name:</strong> {preorder.customerName}, 
            <strong> Email:</strong> {preorder.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreorderManagement;
