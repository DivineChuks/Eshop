import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <Container>
        <Row className="py-5">
          <Col className="justify-content-center text-center">
            <h2>Your bag</h2>
            <h6>is currently empty</h6>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center py-md-5">
          <Col xs="auto">
            <h3>Your Bag</h3>
          </Col>
        </Row>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="py-md-5 py-3">
          <hr style={{ margin: "auto" }} />
        </div>
        <Row>
          <Col xs={3}>
            <h4>total</h4>
          </Col>
          <Col xs={5}></Col>
          <Col sx={4}>
            <span>${total.toFixed(2)}</span>
          </Col>
        </Row>
        <div className="text-center">
          <Button variant="outline-primary" onClick={() => dispatch(openModal())}>
            Clear btn
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CartContainer;
