
// import React, { useState } from "react";
// import axios from "axios";
// import { Col, Row, Form, Button, Card } from "react-bootstrap";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     productName: "",
//     productImage: "",
//     purchasePrice: "",
//     brand: "",
//     quantity: "",
//     manufacturingDate: "",
//     sellerName: "",
//     phoneNumber: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({
//       ...product,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/seller/add-product",
//         product
//       );
//       console.log(response.data);
//       alert("Product added successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to add product");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Card
//         style={{
//           width: "850px",
//           maxWidth: "80rem",
//           padding: "20px",
//           border: "none",
//           backgroundColor: "#C9E9F2",
//           boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
//           margin: "0 auto",
//         }}
//       >
//         <Row className="mb-3">
//          <Col className="text-center" style={{ fontSize: '35px', fontWeight: 'bold' }}>
//             Add Products
//          </Col>
//         </Row>
//       <div>
      
//         <label>Product Name: </label>
//         <input type="text" name="productName" value={product.productName} onChange={handleChange} required />
       
//       </div>
    
//       <br/>
//       <div>
//         <label>Product Image URL: </label>
//         <input type="text" name="productImage" value={product.productImage} onChange={handleChange} required />
//       </div><br/>
//       <div>
//         <label>Purchase Price: </label>
//         <input type="number" name="purchasePrice" value={product.purchasePrice} onChange={handleChange} required />
//       </div><br/>
//       <div>
//         <label>Brand: </label>
//         <input type="text" name="brand" value={product.brand} onChange={handleChange} required />
//       </div><br/>
//       <div>
//         <label>Quantity: </label>
//         <input type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
//       </div><br/>
//       <div>
//         <label>Manufacturing Date: </label>
//         <input type="date" name="manufacturingDate" value={product.manufacturingDate} onChange={handleChange} required />
//       </div><br/>
//       <div>
//         <label>Seller Name: </label>
//         <input type="text" name="sellerName" value={product.sellerName} onChange={handleChange} required />
//       </div><br/>
//       <div>
//         <label>Phone Number: </label>
//         <input type="text" name="phoneNumber" value={product.phoneNumber} onChange={handleChange} required />
//       </div><br/>
//       <div>
//         <label>Email: </label>
//         <input type="email" name="email" value={product.email} onChange={handleChange} required />
//       </div><br/>
//       <button type="submit">Add</button>
        
//       </Card>
//       </form>
//   );
// };

// export default AddProduct;








import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Form, Button, Card,Alert } from "react-bootstrap";

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

  const [errors, setErrors] = useState({
    phoneNumber: '',
    email: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let error = '';


    switch (name) {
      case 'productName':
        // Validate product name dropdown options
        if (!['Yoghurt', 'cheese', 'yoghurt drink', 'Milk powder', 'milk butter', 'curd'].includes(value)) {
          // Handle invalid input (optional: display error message)
          newValue = '';
          error = 'Invalid product name';

        }
        break;
      case 'purchasePrice':
        // Allow only numbers
        newValue = value.replace(/\D/g, '');
        break;
      case 'brand':
        // Allow only letters
        newValue = value.replace(/[^a-zA-Z]/g, '');
        break;
      case 'quantity':
        // Allow only numbers
        newValue = value.replace(/\D/g, '');
        break;
      case 'manufacturingDate':
        // Validate manufacturing date (e.g., ensure it's not a future date)
        const today = new Date();
        const selectedDate = new Date(value);
        if (selectedDate > today) {
          // Handle invalid date (optional: display error message)
          newValue = '';
          error = 'Manufacturing date cannot be in the future';
        }
        break;
      case 'sellerName':
        // Allow only letters and spaces
        newValue = value.replace(/[^a-zA-Z\s]/g, '');
        break;
      case 'phoneNumber':
      
      // Allow only numbers and validate format
      newValue = value.replace(/\D/g, '').slice(0, 10);
      if (!/^0[0-9]{9}$/.test(newValue)) {
        error = 'Phone number must start with 0 and be exactly 10 digits';
      } else {
        error = '';

        }
        break;
      case 'email':
        // Basic email format validation
        if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          error = 'Invalid email format';
        } else {
          error = '';
        }

        break;
      default:
        break;
    }

    setProduct({
      ...product,
      [name]: newValue,
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Prevent form submission if there are validation errors
     if (errors.phoneNumber || errors.email) {
      alert("Please fix the errors before submitting the form.");
      return;
    }

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
    <Form onSubmit={handleSubmit}>
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
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product Name:</Form.Label>
          <Form.Select
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          >
            <option value="">Select Product</option>
            <option value="Yoghurt">Yoghurt</option>
            <option value="cheese">Cheese</option>
            <option value="yoghurt drink">Yoghurt Drink</option>
            <option value="Milk powder">Milk Powder</option>
            <option value="milk butter">Milk Butter</option>
            <option value="curd">Curd</option>
          </Form.Select>
          {/* Optional: Display error message for invalid input */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="productImage">
          <Form.Label>Product Image:</Form.Label>
          <Form.Control
            type="text"
            name="productImage"
            value={product.productImage}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="purchasePrice">
          <Form.Label>Purchase Price:</Form.Label>
          <Form.Control
            type="number"
            name="purchasePrice"
            value={product.purchasePrice}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Brand:</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="manufacturingDate">
          <Form.Label>Manufacturing Date:</Form.Label>
          <Form.Control
            type="date"
            name="manufacturingDate"
            value={product.manufacturingDate}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sellerName">
          <Form.Label>Seller Name:</Form.Label>
          <Form.Control
            type="text"
            name="sellerName"
            value={product.sellerName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={product.phoneNumber}
            onChange={handleChange}
            required
            isInvalid={errors.phoneNumber !== ''}
          />
          {/* Optional: Add validation feedback UI for phone number */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={product.email}
            onChange={handleChange}
            
            required
            isInvalid={errors.email !== ''}
          />
          {/* Optional: Add validation feedback UI for email */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Card>
    </Form>
  );
};

export default AddProduct;








