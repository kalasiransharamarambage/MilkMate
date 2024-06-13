import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function OrderForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    district: '',
    deliveryAddress: '',
    quantity: '',
    packSize: '',
  });

  const [error, setError] = useState(null);
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      // Allow only letters and spaces in fullName field
      const letters = /^[A-Za-z\s]*$/;
      if (!value.match(letters)) {
        setFullNameError('Full name can only contain letters and spaces.');
        return; // Exit if invalid character is found
      } else {
        setFullNameError('');
      }
    }

    if (name === 'emailAddress') {
      // Allow any input in email field
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailPattern.test(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }

    if (name === 'quantity') {
      // Allow only numbers in quantity field
      const numbers = /^[0-9]*$/;
      if (!value.match(numbers)) {
        setQuantityError('Quantity can only contain numbers.');
        return; // Exit if invalid character is found
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

    // Validate email on submit
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.emailAddress && !emailPattern.test(formData.emailAddress)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert('Order submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Error submitting order.');
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', fontSize: '35px', fontWeight: 'bold' }}>
            <Form.Label>Online Ordering Form</Form.Label>
          </Col>
        </Row>
        {[
          { field: 'fullName', label: 'Full Name' },
          { field: 'emailAddress', label: 'Email Address' },
          { field: 'phoneNumber', label: 'Phone Number' },
          { field: 'district', label: 'District' },
          { field: 'deliveryAddress', label: 'Delivery Address' },
          { field: 'quantity', label: 'Quantity' },
          { field: 'packSize', label: 'Pack Size' },
        ].map(({ field, label }, index) => (
          <Form.Group controlId={`formBasic${field}`} key={index}>
            <Row>
              <Col xs={2} style={{ display: 'flex', justifyContent: 'end' }}>
                <Form.Label>{label} :</Form.Label>
              </Col>
              <Col xs={8}>
                <Form.Control
                  type="text"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
                {field === 'fullName' && fullNameError && (
                  <div className="text-danger">{fullNameError}</div>
                )}
                {field === 'emailAddress' && emailError && (
                  <div className="text-danger">{emailError}</div>
                )}
                {field === 'quantity' && quantityError && (
                  <div className="text-danger">{quantityError}</div>
                )}
              </Col>
              <Col xs={2} style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
              </Col>
            </Row>
          </Form.Group>
        ))}
        {error && <div className="text-danger">{error}</div>}
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="outline-primary" type="submit">
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default OrderForm;
