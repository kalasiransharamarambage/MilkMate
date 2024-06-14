import { useEffect, useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/orders')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setOrders(data))
      .catch((error) => {
        console.error('Error fetching orders:', error);
        setError('Error fetching orders.');
      });
  }, []);


  const handleDelete = (orderId) => {
    fetch(`http://localhost:3001/api/orders/${orderId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete order with ID ${orderId}`);
        }
        // Remove the deleted order from the orders state
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        alert('Order deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting order:', error);
        setError('Error deleting order');
      });
  };

  return (
    <Container>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center', fontSize: '35px', fontWeight: 'bold' }}>
          <h1>Order List</h1>
        </Col>
      </Row>
      {error && <div className="text-danger">{error}</div>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>District</th>
            <th>Delivery Address</th>
            <th>Quantity</th>
            <th>Pack Size</th>
            <th>Delete</th>
            <th>Update</th>
           
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id || index}>
              <td>{index + 1}</td>
              <td>{order.fullName}</td>
              <td>{order.emailAddress}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.district}</td>
              <td>{order.deliveryAddress}</td>
              <td>{order.quantity}</td>
              <td>{order.packSize}</td>
              <td>
        <button onClick={() => handleDelete(order._id)}>Delete</button>
      </td>
      <td>
      <Link to={`/update-order/${order._id}`}>Update</Link>
      </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default OrderList;
