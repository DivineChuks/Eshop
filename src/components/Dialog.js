import React from "react";
import { Modal, Button } from "react-bootstrap";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Dialog = () => {
  const dispatch = useDispatch()
  const {isOpen} = useSelector((store) => store.modal)
  return (
    <Modal show={isOpen} onHide={() => dispatch(closeModal())}> 
      <Modal.Body>
        <p>Remove all items from your shopping cart.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal())
        }}>Confirm</Button>
        <Button variant="primary" onClick={() => dispatch(closeModal())}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;
