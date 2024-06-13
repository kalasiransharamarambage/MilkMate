import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function UpdateOrder() {
  const { orderId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    district: '',
    deliveryAddress: '',
    quantity: '',
    packSize: '',
  });

  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  useEffect(() => {
    // Fetch order details using orderId and populate the form data
    fetch(`http://localhost:3001/api/orders/${orderId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Update form data state with fetched order details
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching order details:', error);
      });
  }, [orderId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      const letters = /^[A-Za-z\s]*$/;
      if (!value.match(letters)) {
        setFullNameError('Full name can only contain letters and spaces.');
        return;
      } else {
        setFullNameError('');
      }
    }

    if (name === 'emailAddress') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailPattern.test(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }

    if (name === 'quantity') {
      const numbers = /^[0-9]*$/;
      if (!value.match(numbers)) {
        setQuantityError('Quantity can only contain numbers.');
        return;
      } else {
        setQuantityError('');
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.emailAddress && !emailPattern.test(formData.emailAddress)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    fetch(`http://localhost:3001/api/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to update order with ID ${orderId}`);
        }
        alert('Order updated successfully');
      })
      .catch((error) => {
        console.error('Error updating order:', error);
      });
  };

  return (
    <div>
      <h2>Update Order</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {fullNameError && <div className="text-danger">{fullNameError}</div>}
        </Form.Group>
        <Form.Group controlId="emailAddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="district">
          <Form.Label>District</Form.Label>
          <Form.Control
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="deliveryAddress">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          {quantityError && <div className="text-danger">{quantityError}</div>}
        </Form.Group>
        <Form.Group controlId="packSize">
          <Form.Label>Pack Size</Form.Label>
          <Form.Control
            type="text"
            name="packSize"
            value={formData.packSize}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Order
        </Button>
      </Form>
    </div>
  );
}

export default UpdateOrder;
