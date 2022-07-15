import React, { useEffect } from "react";
import Header from "./components/Header";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Dialog from "./components/Dialog";
import { Row, Col } from "react-bootstrap";

const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [cartItems]);

  // if (isLoading) {
  //   return (
  //     <Row className='py-5'>
  //       <Col className="text-center">
  //         <h2>Loading...</h2>
  //       </Col>
  //     </Row>
  //   );
  // }

  return (
    <>
      <Header />
      {isOpen && <Dialog />}
      <CartContainer />
    </>
  );
};

export default App;
