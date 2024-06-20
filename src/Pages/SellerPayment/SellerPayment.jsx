








import React, { useState } from 'react';
import { Col, Row, Form, Button, Card, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation schema
const schema = yup.object().shape({
  cardNumber: yup.string().required('Card number is required').matches(/^\d{16}$/, 'Card number must be exactly 16 digits'),
  cardHolderName: yup.string().required('Card holder name is required').matches(/^[A-Za-z\s]+$/, 'Card holder name can only contain letters and spaces'),
  mm: yup.string().required('MM is required').matches(/^\d{2}$/, 'MM must be exactly 2 digits'),
  yy: yup.string().required('YY is required').matches(/^\d{2}$/, 'YY must be exactly 2 digits'),
  cvv: yup.string().required('CVV is required').matches(/^\d{3}$/, 'CVV must be exactly 3 digits')
});

function SellerPayment() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  
  const [paymentStatus, setPaymentStatus] = useState('');

  const onSubmit = (data) => {
    // setPaymentStatus('Ongoing');
    alert('Payment successful');
    reset();
  };

  return (
    <Card
      style={{
        width: '650px',
        maxWidth: '80rem',
        padding: '20px',
        border: 'none',
        backgroundColor: '#C9E9F2',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
        margin: '0 auto',
      }}
    >
      <Row className="mb-3">
        <Col className="text-center" style={{ fontSize: '35px', fontWeight: 'bold' }}>
          Card Details
        </Col>
      </Row>
      {paymentStatus && (
        <Row className="mb-3">
          <Col className="text-center">
            <Alert variant="success">Payment Status: {paymentStatus}</Alert>
          </Col>
        </Row>
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Card Number"
            {...register('cardNumber')}
          />
          {errors.cardNumber && <Alert variant="danger">{errors.cardNumber.message}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Card Holder Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Card Holder Name"
            {...register('cardHolderName')}
          />
          {errors.cardHolderName && <Alert variant="danger">{errors.cardHolderName.message}</Alert>}
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMM">
            <Form.Label>MM</Form.Label>
            <Form.Control
              type="text"
              {...register('mm')}
            />
            {errors.mm && <Alert variant="danger">{errors.mm.message}</Alert>}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYY">
            <Form.Label>YY</Form.Label>
            <Form.Control
              type="text"
              {...register('yy')}
            />
            {errors.yy && <Alert variant="danger">{errors.yy.message}</Alert>}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              {...register('cvv')}
            />
            {errors.cvv && <Alert variant="danger">{errors.cvv.message}</Alert>}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col className="text-center">
            <Button variant="primary" type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default SellerPayment;




