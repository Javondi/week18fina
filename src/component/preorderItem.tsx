import React from 'react';

interface Preorder {
  id: string;
  customerName: string;
  email: string;
  productId: string;
  quantity: number;
}

interface PreorderItemProps {
  preorder: Preorder;
  onDelete: (id: string) => void; // Assuming onDelete takes an id and returns void
}

const PreorderItem: React.FC<PreorderItemProps> = ({ preorder, onDelete }) => {
  return (
    <div>
      <h3>{preorder.customerName} ({preorder.productId})</h3>
      <p>Quantity: {preorder.quantity}</p>
      <button onClick={() => onDelete(preorder.id)}>Delete</button>
    </div>
  );
};

export default PreorderItem;
