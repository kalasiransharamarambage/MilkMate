// // src/VendorRegistrationForm.js
// import React, { useState } from 'react';
// // import Container from "react-bootstrap/Container";
// // import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
// import milkproducts from "../../assets/Img/milkproducts.jpg";
// import Form from "react-bootstrap/Form";
// import axios from 'axios';

// const VendorRegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         businessName: '',
//         address1: '',
//         address2: '',
//         city: '',
//         region: '',
//         postalCode: '',
//         country: 'United States',
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         mobilePhone: '',
//         emailAddress: '',
//         terms: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/api/register', formData);
//             if (response.status === 201) {
//                 alert('Registration successful!');
//             } else {
//                 alert('Registration failed!');
//             }
//         } catch (error) {
//             alert('Registration failed!');
//         }
//     };

//     return (
       
           
//             <Row>
//               <Col md={6}>
//                 <Image 
//                   src={milkproducts} 
//                   alt="Milk products" 
//                   style={{ width: "100%", height: "auto", borderRadius: "10px" }} 
//                 />
//               </Col>
//               <Col md={6}>
//                 <h2 className="text-center mb-4" style={{ fontSize: "30px", color: "#0B4EFC", fontFamily: "Arial, sans-serif" }}>
//                   Seller Registration
//                 </h2>
//         <form onSubmit={handleSubmit}>
          
//             <label>
          
//                 Business Name:
                
//                 <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
              
//                 </label><br/>
           
//             <label>
//                 Address:
//                 <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />
//             </label><br />
           
//             <label>
//                 City:
//                 <input type="text" name="city" value={formData.city} onChange={handleChange} required />
//             </label><br />
//             <label>
//                 Region:
//                 <input type="text" name="region" value={formData.region} onChange={handleChange} required />
//             </label><br />
           
//             <label>
//                 Country:
//                 <input type="text" name="country" value={formData.country} onChange={handleChange} required />
//             </label><br />
//             <label>
//                 First Name:
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
//             </label><br />
//             <label>
//                 Last Name:
//                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
//             </label><br />
//             <label>
//                 Phone Number:
//                 <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
//             </label><br />
//             <label>
//                 Mobile Phone:
//                 <input type="text" name="mobilePhone" value={formData.mobilePhone} onChange={handleChange} required />
//             </label><br />
//             <label>
//                 Email Address:
//                 <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
//             </label><br />
//             <label>
//                 <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
//                 I agree to <a href="#">Terms of Service</a>
//             </label><br />
//             <button type="submit">Send Application</button>
//         </form>
//         </Col>
//             </Row>
         
      
       
//     );
// };

// export default VendorRegistrationForm;



import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing
import "bootstrap/dist/css/bootstrap.min.css";
// import "./SignUpPage.css";
import milkproducts from "../../assets/Img/milkproducts.jpg";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateName = (name) => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(String(name));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^0[0-9]{9}$/; // Starts with 0, followed by 9 digits
    return re.test(String(phone));
  };

  const handleNameChange = (e) => {
    const input = e.target.value;
    const onlyLettersAndSpaces = input.replace(/[^a-zA-Z\s]/g, ""); // Remove non-letter characters except spaces

    setName(onlyLettersAndSpaces);

    if (!validateName(onlyLettersAndSpaces)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name should only contain letters and spaces",
      }));
    } else {
      setErrors((prevErrors) => {
        const { name, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    const onlyAllowedCharacters = input.replace(/[^a-z0-9.@]/g, ""); // Allow simple letters, "@" symbol, ".", and numbers
    setEmail(onlyAllowedCharacters);

    if (!validateEmail(onlyAllowedCharacters)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => {
        const { email, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const onlyNumbers = input.replace(/\D/g, ""); // Remove non-digit characters

    setPhone(onlyNumbers);

    if (!validatePhone(onlyNumbers)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number should start with 0 and contain 10 digits",
      }));
    } else {
      setErrors((prevErrors) => {
        const { phone, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    if (!validatePassword(input)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "input valid pwd",
      }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  };
  

  const validatePassword = (password) => {
    return password.length === 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!name || !validateName(name))
      validationErrors.name =
        "Name is required and should only contain letters";
    if (!email || !validateEmail(email))
      validationErrors.email = "Valid email is required";
    if (!phone || !validatePhone(phone))
      validationErrors.phone =
        "Valid phone number is required and should start with 0 and contain 10 digits";
    if (!password || !validatePassword(password))
      validationErrors.password =
        "Password is required and must be exactly 8 characters long";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // const hashedPassword = await bcrypt.hash(password, 10);
      const response = await axios.post("http://localhost:3000/api/register", {
        name,
        email,
        phone,
        password,
      });
      alert(response.data);
      navigate("/sellerlogin");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col md={4} className="p-0">
          <div className="image-container">
            <Image src={milkproducts} alt="SignUp"
             style={{ width: "100%", height: "auto", borderRadius: "10px" }}  />
          </div>
        </Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-center"
        >
          <Form className="w-75 form-background" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">
              <b>Welcome to Sign Up Page</b>
            </h2>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                // onChange={(e) => setName(e.target.value)}
                onChange={handleNameChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleEmailChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formPhoneNumber">
              <Form.Control
                type="tel"
                placeholder="Phone number"
                value={phone}
                // onChange={(e) => setPhone(e.target.value)}
                onChange={handlePhoneChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handlePasswordChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Button variant="success" type="submit" className="w-100">
              Register
            </Button>
            <div className="text-center mt-3">
              <p>
                You already have an account? <a href="/sellerlogin">Login</a>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
