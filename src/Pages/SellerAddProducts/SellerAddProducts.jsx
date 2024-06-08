// import React from 'react';
// import { Col, Row, Form, Button, Card } from 'react-bootstrap';
// import { MdDelete } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";

// const formFields = [
//   { label: 'Product Name', type: 'text', placeholder: 'Enter product name' },
//   { label: 'Product Image', type: 'text', placeholder: 'Add Image', style: { height: '150px' } },
//   { label: 'Purchase Price', type: 'text', placeholder: 'Enter purchase price' },
//   { label: 'Brand', type: 'text', placeholder: 'Enter brand' },
//   { label: 'Quantity', type: 'text', placeholder: 'Enter quantity' },
//   { label: 'Manufacturing Date', type: 'text', placeholder: 'Enter manufacturing date' },
//   { label: 'Pack Size', type: 'text', placeholder: 'Enter pack size' },
//   { label: 'Seller Name', type: 'text', placeholder: 'Enter seller name' },
//   { label: 'Phone Number', type: 'text', placeholder: 'Enter phone number' },
//   { label: 'Email Address', type: 'email', placeholder: 'Enter email' },
// ];

// function SellerAddProducts() {
//   return (
//     <Card
//       style={{
//         width: '800px',
//         maxWidth: '80rem',
//         padding: '20px',
//         border: 'none',
//         backgroundColor: '#C9E9F2',
//         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
//         margin: '0 auto',
//       }}
//     >
//       <Form style={{ marginLeft: "20px" }}>
//         <Row className="mb-3">
//           <Col className="text-center" style={{ fontSize: '35px', fontWeight: 'bold' }}>
//             Add Products
//           </Col>
//         </Row>
//         <Row className="mb-3">
//           <Col>
//             <h4 style={{ marginLeft: "60px" }}>Product Information</h4>
//           </Col>
//         </Row>
//         {formFields.slice(0, 7).map((field, index) => (
//           <Form.Group className="mb-3" key={index}>
//             <Row>
//               <Col xs={12} md={2} className="text-md-end">
//                 <Form.Label>{field.label} :</Form.Label>
//               </Col>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   style={{ width: '100%', textAlign: "center", ...field.style }}
//                   type={field.type}
//                   placeholder={field.placeholder}
//                 />
//               </Col>
//               <Col xs={12} md={2} className="text-center d-flex align-items-center justify-content-center">

//               </Col>
//             </Row>
//           </Form.Group>
//         ))}
//         <Row className="mb-3">
//           <Col>
//             <h4 style={{ marginLeft: "60px" }}>Contact Information</h4>
//           </Col>
//         </Row>
//         {formFields.slice(7).map((field, index) => (
//           <Form.Group className="mb-3" key={index}>
//             <Row>
//               <Col xs={12} md={2} className="text-md-end">
//                 <Form.Label>{field.label} :</Form.Label>
//               </Col>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   style={{ width: '100%', textAlign: "center" }}
//                   type={field.type}
//                   placeholder={field.placeholder}
//                 />
//               </Col>
//               <Col xs={12} md={2} className="text-center d-flex align-items-center justify-content-center">

//               </Col>
//             </Row>
//           </Form.Group>
//         ))}
//         <Row className="mb-3">
//           <Col className="text-center">
//             <Button variant="primary" type="submit">Submit</Button>
//           </Col>
//         </Row>
//       </Form>
//     </Card>
//   );
// }

// export default SellerAddProducts;

// src/components/AddProduct.js

import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Form, Button, Card } from "react-bootstrap";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productImage: "",
    purchasePrice: "",
    brand: "",
    quantity: "",
    manufacturingDate: "",
    sellerName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/seller/add-product",
        product
      );
      console.log(response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card
        style={{
          width: "850px",
          maxWidth: "80rem",
          padding: "20px",
          border: "none",
          backgroundColor: "#C9E9F2",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
          margin: "0 auto",
        }}
      >
        <Row className="mb-3">
         <Col className="text-center" style={{ fontSize: '35px', fontWeight: 'bold' }}>
            Add Products
         </Col>
        </Row>
      <div>
      
        <label>Product Name: </label>
        <input type="text" name="productName" value={product.productName} onChange={handleChange} required />
       
      </div>
    
      <br/>
      <div>
        <label>Product Image URL: </label>
        <input type="text" name="productImage" value={product.productImage} onChange={handleChange} required />
      </div><br/>
      <div>
        <label>Purchase Price: </label>
        <input type="number" name="purchasePrice" value={product.purchasePrice} onChange={handleChange} required />
      </div><br/>
      <div>
        <label>Brand: </label>
        <input type="text" name="brand" value={product.brand} onChange={handleChange} required />
      </div><br/>
      <div>
        <label>Quantity: </label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
      </div><br/>
      <div>
        <label>Manufacturing Date: </label>
        <input type="date" name="manufacturingDate" value={product.manufacturingDate} onChange={handleChange} required />
      </div><br/>
      <div>
        <label>Seller Name: </label>
        <input type="text" name="sellerName" value={product.sellerName} onChange={handleChange} required />
      </div><br/>
      <div>
        <label>Phone Number: </label>
        <input type="text" name="phoneNumber" value={product.phoneNumber} onChange={handleChange} required />
      </div><br/>
      <div>
        <label>Email: </label>
        <input type="email" name="email" value={product.email} onChange={handleChange} required />
      </div><br/>
      <button type="submit">Add</button>
        
      </Card>
      </form>
  );
};

export default AddProduct;
