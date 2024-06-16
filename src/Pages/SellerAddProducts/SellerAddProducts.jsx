// import React, { useState } from "react";
// import axios from "axios";
// import { Col, Row, Form, Button, Card } from "react-bootstrap";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     productName: "",
//     productImage: null,
//     purchasePrice: "",
//     brand: "",
//     quantity: "",
//     manufacturingDate: "",
//   });

//   const [errors, setErrors] = useState({
//     purchasePrice: "",
//     brand: "",
//     quantity: "",
//     manufacturingDate: ""
//   });

//   const validate = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "purchasePrice":
//         if (!/^\d*$/.test(value)) {
//           error = "Purchase Price must be a number";
//         }
//         break;
//       case "brand":
//         if (!/^[a-zA-Z\s]*$/.test(value)) {
//           error = "Brand must contain only letters";
//         }
//         break;
//       case "quantity":
//         if (!/^\d*$/.test(value)) {
//           error = "Quantity must be a number";
//         }
//         break;
//       case "manufacturingDate":
//         const today = new Date();
//         const selectedDate = new Date(value);
//         if (selectedDate > today) {
//           error = "Manufacturing Date cannot be in the future";
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: error,
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     let newValue = value;

//     switch (name) {
//       case 'productName':
//         if (!['Yoghurt', 'cheese', 'yoghurt drink', 'Milk powder', 'milk butter', 'curd'].includes(value)) {
//           newValue = '';
//         }
//         break;
//       case 'purchasePrice':
//         newValue = value.replace(/\D/g, '');
//         break;
//       case 'brand':
//         newValue = value.replace(/[^a-zA-Z\s]/g, '');
//         break;
//       case 'quantity':
//         newValue = value.replace(/\D/g, '');
//         break;
//       case 'manufacturingDate':
//         const today = new Date();
//         const selectedDate = new Date(value);
//         if (selectedDate > today) {
//           newValue = '';
//         }
//         break;
//       case 'productImage':
//         newValue = files[0];
//         break;
//       default:
//         break;
//     }

//     setProduct({
//       ...product,
//       [name]: newValue,
//     });

//     validate(name, newValue);
//   };

//   const handleKeyDown = (e) => {
//     const { name } = e.target;
//     const key = e.key;

//     if (name === "purchasePrice" || name === "quantity") {
//       if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Delete" && key !== "ArrowLeft" && key !== "ArrowRight") {
//         e.preventDefault();
//       }
//     }

//     if (name === "brand") {
//       if (!/^[a-zA-Z\s]$/.test(key) && key !== "Backspace" && key !== "Delete" && key !== "ArrowLeft" && key !== "ArrowRight" && key !== " ") {
//         e.preventDefault();
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure all fields are valid before submitting
//     let isValid = true;
//     for (const key in errors) {
//       if (errors[key]) {
//         isValid = false;
//         break;
//       }
//     }

//     if (!isValid) {
//       alert("Please fix the errors before submitting");
//       return;
//     }

//     const formData = new FormData();
//     for (const key in product) {
//       formData.append(key, product[key]);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/seller/add-product",
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );
//       console.log(response.data);
//       alert("Product added successfully!");
//     } catch (error) {
//       console.error("Error:", error);
//       console.error("Error response data:", error.response?.data); // Log error response data
//       alert("Failed to add product");
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
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
//           <Col className="text-center" style={{ fontSize: '35px', fontWeight: 'bold' }}>
//             Add Products
//           </Col>
//         </Row>
//         <Form.Group className="mb-3" controlId="productName">
//           <Form.Label>Product Name:</Form.Label>
//           <Form.Select
//             name="productName"
//             value={product.productName}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Product</option>
//             <option value="Yoghurt">Yoghurt</option>
//             <option value="cheese">Cheese</option>
//             <option value="yoghurt drink">Yoghurt Drink</option>
//             <option value="Milk powder">Milk Powder</option>
//             <option value="milk butter">Milk Butter</option>
//             <option value="curd">Curd</option>
//           </Form.Select>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="productImage">
//           <Form.Label>Product Image:</Form.Label>
//           <Form.Control
//             type="file"
//             name="productImage"
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="purchasePrice">
//           <Form.Label>Purchase Price:</Form.Label>
//           <Form.Control
//             type="number"
//             name="purchasePrice"
//             value={product.purchasePrice}
//             onChange={handleChange}
//             onKeyDown={handleKeyDown}
//             required
//           />
//           {errors.purchasePrice && <span style={{ color: 'red' }}>{errors.purchasePrice}</span>}
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="brand">
//           <Form.Label>Brand:</Form.Label>
//           <Form.Control
//             type="text"
//             name="brand"
//             value={product.brand}
//             onChange={handleChange}
//             onKeyDown={handleKeyDown}
//             required
//           />
//           {errors.brand && <span style={{ color: 'red' }}>{errors.brand}</span>}
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="quantity">
//           <Form.Label>Quantity:</Form.Label>
//           <Form.Control
//             type="number"
//             name="quantity"
//             value={product.quantity}
//             onChange={handleChange}
//             onKeyDown={handleKeyDown}
//             required
//           />
//           {errors.quantity && <span style={{ color: 'red' }}>{errors.quantity}</span>}
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="manufacturingDate">
//           <Form.Label>Manufacturing Date:</Form.Label>
//           <Form.Control
//             type="date"
//             name="manufacturingDate"
//             value={product.manufacturingDate}
//             onChange={handleChange}
//             required
//           />
//           {errors.manufacturingDate && <span style={{ color: 'red' }}>{errors.manufacturingDate}</span>}
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Add
//         </Button>
//       </Card>
//     </Form>
//   );
// };

// export default AddProduct;








import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Form, Button, Card } from "react-bootstrap";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productImage: null,
    purchasePrice: "",
    brand: "",
    quantity: "",
    manufacturingDate: "",
    sellerName:"",
  });

  const [errors, setErrors] = useState({
    purchasePrice: "",
    brand: "",
    quantity: "",
    manufacturingDate: "",
    sellerName:"",

  });

  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "sellerName":
        if (!/^[a-zA-Z\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/.test(value)) {
          error = "Brand must contain only letters and symbols";
        }
        break;
      case "purchasePrice":
        if (!/^\d*$/.test(value)) {
          error = "Purchase Price must be a number";
        }
        break;
      case "brand":
        if (!/^[a-zA-Z\s]*$/.test(value)) {
          error = "Brand must contain only letters";
        }
        break;
      case "quantity":
        if (!/^\d*$/.test(value)) {
          error = "Quantity must be a number";
        }
        break;
      case "manufacturingDate":
        const today = new Date();
        const selectedDate = new Date(value);
        if (selectedDate > today) {
          error = "Manufacturing Date cannot be in the future";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    let newValue = value;

    switch (name) {
      case 'productName':
        if (!['Yoghurt', 'cheese', 'yoghurt drink', 'Milk powder', 'milk butter', 'curd'].includes(value)) {
          newValue = '';
        }
        break;
        case 'sellerName':
        newValue = value.replace(/[^a-zA-Z\s!@#$%^&*()_+=\-[\]{};':"\\|,.<>/?]/g, '');
        break;
      case 'purchasePrice':
        newValue = value.replace(/\D/g, '');
        break;
      case 'brand':
        newValue = value.replace(/[^a-zA-Z\s]/g, '');
        break;
      case 'quantity':
        newValue = value.replace(/\D/g, '');
        break;
      case 'manufacturingDate':
        const today = new Date();
        const selectedDate = new Date(value);
        if (selectedDate > today) {
          newValue = '';
        }
        break;
      case 'productImage':
        newValue = files[0];
        break;
      default:
        break;
    }

    setProduct({
      ...product,
      [name]: newValue,
    });

    validate(name, newValue);
  };

  const handleKeyDown = (e) => {
    const { name } = e.target;
    const key = e.key;

    if (name === "purchasePrice" || name === "quantity") {
      if (!/^\d$/.test(key) && key !== "Backspace" && key !== "Delete" && key !== "ArrowLeft" && key !== "ArrowRight") {
        e.preventDefault();
      }
    }

    if (name === "brand") {
      if (!/^[a-zA-Z\s]$/.test(key) && key !== "Backspace" && key !== "Delete" && key !== "ArrowLeft" && key !== "ArrowRight" && key !== " ") {
        e.preventDefault();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are valid before submitting
    let isValid = true;
    for (const key in errors) {
      if (errors[key]) {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      alert("Please fix the errors before submitting");
      return;
    }

    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/seller/add-product",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log(response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error:", error);
      console.error("Error response data:", error.response?.data); // Log error response data
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="productImage">
          <Form.Label>Product Image:</Form.Label>
          <Form.Control
            type="file"
            name="productImage"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sellerName">
          <Form.Label>Seller Name with Your Initials:</Form.Label>
          <Form.Control
            type="text"
            name="sellerName"
            value={product.sellerName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.sellerName && <span style={{ color: 'red' }}>{errors.sellerName}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="purchasePrice">
          <Form.Label>Purchase Price:</Form.Label>
          <Form.Control
            type="number"
            name="purchasePrice"
            value={product.purchasePrice}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.purchasePrice && <span style={{ color: 'red' }}>{errors.purchasePrice}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Brand:</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.brand && <span style={{ color: 'red' }}>{errors.brand}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
          {errors.quantity && <span style={{ color: 'red' }}>{errors.quantity}</span>}
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
          {errors.manufacturingDate && <span style={{ color: 'red' }}>{errors.manufacturingDate}</span>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Card>
    </Form>
  );
};

export default AddProduct;













