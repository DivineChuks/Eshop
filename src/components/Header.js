import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <Navbar expand="md" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Eshop</Navbar.Brand>
        <div className="justify-content-end">
          <div className="cartStyle">
            <i className="fa-solid fa-cart-shopping iconStyle"></i>
            <p className="amountStyle">{amount}</p>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
