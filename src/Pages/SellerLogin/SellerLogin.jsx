import React, { useState } from "react";
import { Container, Row, Card,Col, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./LoginPage.css";
 import milkproducts from "../../assets/Img/milkproducts.jpg";

const LoginPage = () => {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  email, password }),
      });
      const data = await response.json();

      console.log(data);
      if (response.ok) {
        // Assuming response contains a token if login is successful
        localStorage.setItem("authToken", data.token);
        navigate("/sellerhome");
      } else {
        // Handle errors based on response status
        alert(
          data.message ||
            "Login failed. Please check your credentials and try again."
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(
        "An error occurred during login. Please try again. " + error.message
      );
    }
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column  align-items-center">
      <h1 className=" mb-4" style={{ fontSize: "45px", color: "black" }}>
        WELCOME TO SELLER DASHBOARD
      </h1>
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "1200px", backgroundColor: "#C9E9F2", height: "500px" }}>
        <Row className="h-100">
          <Col md={4} className="p-0 d-flex justify-content-center align-items-center">
            <div className="image-container">
              <Image src={milkproducts} alt="Login"
                style={{ width: "100%", height: "450px", borderRadius: "10px", maxWidth: "450px" ,marginLeft:"20px"}} />
            </div>
          </Col>
          <Col md={8} className="d-flex align-items-center justify-content-center">
            <Form className="w-100 p-3" style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
              <h2 className="text-center mb-4" style={{ fontSize: "30px", color: "#0B4EFC", fontFamily: "Arial, sans-serif" }}>
                Seller Login
              </h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
              <br />
              <br />
              <div className="text-center mt-3">
                <p>
                  Don't have an account? <a href="/sellerregistration">Sign Up</a>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default LoginPage;






// src/Pages/SellerLogin.jsx

// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import milkproducts from "../../assets/Img/milkproducts.jpg";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
//   const validatePassword = (password) => password.length >= 6;

//   const handleChange = (setter, validator, field) => (e) => {
//     const value = e.target.value;
//     setter(value);
//     if (!validator(value)) {
//       setErrors((prevErrors) => ({ ...prevErrors, [field]: `Invalid ${field} format` }));
//     } else {
//       setErrors((prevErrors) => {
//         const { [field]: _, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let validationErrors = {};

//     if (!email || !validateEmail(email)) validationErrors.email = "Valid email is required";
//     if (!password || !validatePassword(password)) validationErrors.password = "Password is required and must be at least 6 characters long";

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/api/seller/login", { email, password });
//       localStorage.setItem("authToken", response.data.token);
//       localStorage.setItem("sellerId", response.data.sellerId);
//       navigate("/allproducts");
//     } catch (error) {
//       alert(error.response.data || "An error occurred during login. Please try again.");
//     }
//   };

//   return (
//     <Container fluid className="vh-100 d-flex flex-column align-items-center justify-content-center">
//       <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "400px" }}>
//         <h2 className="text-center mb-4">Login</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email :</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={handleChange(setEmail, validateEmail, "email")}
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//           </Form.Group>
//           <br />
//           <Form.Group controlId="formPassword">
//             <Form.Label>Password :</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={handleChange(setPassword, validatePassword, "password")}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//           </Form.Group>
//           <br />
//           <Button variant="primary" type="submit" className="w-100">Login</Button>
//         </Form>
//       </Card>
//     </Container>
//   );
// };

// export default LoginPage;
