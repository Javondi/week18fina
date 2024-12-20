import { Modal, Button } from "react-bootstrap";

interface ModalDialogProps {
  show: boolean;
  title: string;
  body: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalDialog: React.FC<ModalDialogProps> = ({ show, title, body, onClose, onConfirm }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDialog;
