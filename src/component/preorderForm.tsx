import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Preorder {
  id?: string;
  customerName: string;
  email: string;
  productId: string;
  quantity: number;
}

interface PreorderFormProps {
  initialData?: Partial<Preorder>;
  onSubmit: (formData: Preorder) => void;
}

const PreorderForm: React.FC<PreorderFormProps> = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState<Preorder>({
    customerName: initialData.customerName || "",
    email: initialData.email || "",
    productId: initialData.productId || "",
    quantity: initialData.quantity || 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="customerName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="productId">
        <Form.Label>Product ID</Form.Label>
        <Form.Control
          type="text"
          name="productId"
          value={formData.productId}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
          required
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default PreorderForm;
