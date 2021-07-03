import { Modal, Button } from 'react-bootstrap';
import './index.css';

const LoginModal = (props) => {
  const { show, handleClose } = props;
  return (
    <Modal
      className="text-center login-modal"
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Start using your banker.</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body" centered>
        <Button variant="danger" href="/auth/google">
          Sign up with Google
        </Button>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
