import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
import yoghurt from '../../assets/Img/drink.png';
import curd from '../../assets/Img/curd.png';
import Butter from '../../assets/Img/Butter.png';
import drink from '../../assets/Img/yogurt.jpg';
import cheese from "../../assets/Img/cheese.jpg";
import MilkPowder from "../../assets/Img/milkPowder.jpg";
import {Link} from "react-router-dom";


const initialCartItems = [
  { id: 1, name: 'Yogurt', price: 100, qty: 3, image: yoghurt },
  { id: 2, name: 'Curd', price: 60, qty: 1, image: curd },
  { id: 3, name: 'Butter', price: 200, qty: 4, image: Butter },
  { id: 4, name: 'Yogurt Drink', price: 150, qty: 2, image: drink },
  { id: 5, name: 'Milk Powder', price: 150, qty: 2, image: MilkPowder },
  { id: 6, name: 'Cheese', price: 150, qty: 2, image: cheese}
];

const mycart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, value) => {
    if (value < 0) return;
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, qty: value } : item))
    );
  };

  const handleDelete = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <Container>
      <h1 className="my-4 text-center">My Cart</h1>
      <Row className="fw-bold text-center border-bottom py-2">
        <Col xs={6} sm={4} md={2}>Product</Col>
        <Col xs={6} sm={4} md={2}>Product Name</Col>
        <Col xs={6} sm={4} md={2}>Price</Col>
        <Col xs={6} sm={4} md={2}>Quantity</Col>
        <Col xs={6} sm={4} md={2}>Total</Col>
        <Col xs={6} sm={4} md={2}>Actions</Col>
      </Row>
      {cartItems.map((item) => (
        <Row key={item.id} className="align-items-center text-center py-2 border-bottom">
          <Col xs={6} sm={4} md={2}>
            <Image src={item.image} rounded width={75} height={60} />
          </Col>
          <Col xs={6} sm={4} md={2}>{item.name}</Col>
          <Col xs={6} sm={4} md={2}>Rs. {item.price}</Col>
          <Col xs={6} sm={4} md={2}>
            <Row className="justify-content-center align-items-center">
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ width: '30px', height: '30px', padding: '0' }}
                onClick={() => handleQuantityChange(item.id, item.qty + 1)}
              >
                +
              </Button>
              <Form.Control
                type="text"
                value={item.qty}
                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                className="mx-2 text-center"
                style={{ width: '60px', height: '30px' }}
              />
              <Button
                variant="outline-secondary"
                size="sm"
                style={{ width: '30px', height: '30px', padding: '0' }}
                onClick={() => handleQuantityChange(item.id, item.qty - 1)}
              >
                -
              </Button>
            </Row>
          </Col>
          <Col xs={6} sm={4} md={2}>Rs. {item.price * item.qty}</Col>
          <Col xs={6} sm={4} md={2}>
            <Button variant="success" className="me-2" onClick={() => alert('Update feature not implemented')}>
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(item.id)}>
              Delete
            </Button>
          </Col>
        </Row>
      ))}
      <Row className="justify-content-end py-4">
        <Col md={3} className="text-end">
          <h5>Total: Rs. {calculateTotal()}</h5>
          <Link to="/orderform">
          <Button variant="primary" onClick={() => alert('Checkout feature not implemented')}>
            Order
          </Button></Link>
        </Col>
      </Row>
    </Container>
  );
};

export default mycart;
