import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <section className="pt-3">
      <Row className="justify-content-md-center">
        <Col xs={3}>
          <img src={img} alt="cart-img" width="100px" className="img-fluid" />
        </Col>
        <Col xs={5}>
          <h6>{title}</h6>
          <p>${price}</p>
          <p
            style={{ color: "#999", cursor: "pointer" }}
            onClick={() => dispatch(removeItem({ id }))}
          >
            remove
          </p>
        </Col>
        <Col xs={4}>
          <i
            class="fa-solid fa-chevron-up"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increaseItem({ id }))}
          ></i>
          <div>{amount}</div>
          <i
            class="fa-solid fa-chevron-down"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem({ id }));
                return;
              }
              dispatch(decreaseItem({ id }));
            }}
            style={{ cursor: "pointer", marginTop: "-20px !important" }}
          ></i>
        </Col>
      </Row>
    </section>
  );
};

export default CartItem;
