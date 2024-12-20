import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"; // if you are using Button

interface Preorder {
  id: string;
  customerName: string;
  email: string;
  productId: string;
  quantity: number;
}

const PreorderList: React.FC = () => {
  const [preorders, setPreorders] = useState<Preorder[]>([]);

  useEffect(() => {
    // Fetch your preorders here (example)
    setPreorders([
      { id: "1", customerName: "John Doe", email: "john@example.com", productId: "A123", quantity: 2 },
      { id: "2", customerName: "Jane Doe", email: "jane@example.com", productId: "B456", quantity: 3 },
    ]);
  }, []);

  const handleDelete = (id: string) => {
    setPreorders(prevPreorders => prevPreorders.filter(preorder => preorder.id !== id));
  };

  return (
    <div>
      <h2>Preorders</h2>
      <ul>
        {preorders.map((preorder) => (
          <li key={preorder.id}>
            {preorder.customerName} - {preorder.quantity}
            <Button onClick={() => handleDelete(preorder.id)} variant="danger">Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreorderList;
