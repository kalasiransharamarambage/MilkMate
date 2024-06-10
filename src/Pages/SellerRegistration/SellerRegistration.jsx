
// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "./SignUpPage.css";
// import milkproducts from "../../assets/Img/milkproducts.jpg";

// const SignUpPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateName = (name) => {
//     const re = /^[a-zA-Z\s]+$/;
//     return re.test(String(name));
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validatePhone = (phone) => {
//     const re = /^0[0-9]{9}$/; // Starts with 0, followed by 9 digits
//     return re.test(String(phone));
//   };

//   const handleNameChange = (e) => {
//     const input = e.target.value;
//     const onlyLettersAndSpaces = input.replace(/[^a-zA-Z\s]/g, ""); // Remove non-letter characters except spaces

//     setName(onlyLettersAndSpaces);

//     if (!validateName(onlyLettersAndSpaces)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         name: "Name should only contain letters and spaces",
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { name, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const handleEmailChange = (e) => {
//     const input = e.target.value;
//     const onlyAllowedCharacters = input.replace(/[^a-z0-9.@]/g, ""); // Allow simple letters, "@" symbol, ".", and numbers
//     setEmail(onlyAllowedCharacters);

//     if (!validateEmail(onlyAllowedCharacters)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         email: "Invalid email format",
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { email, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };

//   const handlePhoneChange = (e) => {
//     const input = e.target.value;
//     const onlyNumbers = input.replace(/\D/g, ""); // Remove non-digit characters

//     setPhone(onlyNumbers);

//     if (!validatePhone(onlyNumbers)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         phone: "Phone number should start with 0 and contain 10 digits",
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { phone, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };
//   const handlePasswordChange = (e) => {
//     const input = e.target.value;
//     setPassword(input);

//     if (!validatePassword(input)) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         password: "input valid pwd",
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { password, ...rest } = prevErrors;
//         return rest;
//       });
//     }
//   };
  

//   const validatePassword = (password) => {
//     return password.length === 8;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let validationErrors = {};
//     if (!name || !validateName(name))
//       validationErrors.name =
//         "Name is required and should only contain letters";
//     if (!email || !validateEmail(email))
//       validationErrors.email = "Valid email is required";
//     if (!phone || !validatePhone(phone))
//       validationErrors.phone =
//         "Valid phone number is required and should start with 0 and contain 10 digits";
//     if (!password || !validatePassword(password))
//       validationErrors.password =
//         "Password is required and must be exactly 8 characters long";

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       // const hashedPassword = await bcrypt.hash(password, 10);
//       const response = await axios.post("http://localhost:3000/api/register", {
//         name,
//         email,
//         phone,
//         password,
//       });
//       alert(response.data);
//       navigate("/sellerlogin");
//     } catch (error) {
//       alert(error.response.data);
//     }
//   };

//   return (
//     <Container fluid className="vh-100">
//       <Row className="h-100">
//         <Col md={4} className="p-0">
//           <div className="image-container">
//             <Image src={milkproducts} alt="SignUp"
//              style={{ width: "100%", height: "auto", borderRadius: "10px" }}  />
//           </div>
//         </Col>
//         <Col
//           md={8}
//           className="d-flex align-items-center justify-content-center"
//         >
//           <Form className="w-75 form-background" onSubmit={handleSubmit}>
//             <h2 className="text-center mb-4">
//               <b>Welcome to Sign Up Page</b>
//             </h2>
//             <Form.Group controlId="formName">
//               <Form.Control
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 // onChange={(e) => setName(e.target.value)}
//                 onChange={handleNameChange}
//                 isInvalid={!!errors.name}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.name}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <br />
//             <Form.Group controlId="formEmail">
//               <Form.Control
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//                 onChange={handleEmailChange}
//                 isInvalid={!!errors.email}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.email}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <br />
//             <Form.Group controlId="formPhoneNumber">
//               <Form.Control
//                 type="tel"
//                 placeholder="Phone number"
//                 value={phone}
//                 // onChange={(e) => setPhone(e.target.value)}
//                 onChange={handlePhoneChange}
//                 isInvalid={!!errors.phone}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.phone}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <br />
//             <Form.Group controlId="formPassword">
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 // onChange={(e) => setPassword(e.target.value)}
//                 onChange={handlePasswordChange}
//                 isInvalid={!!errors.password}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.password}
//               </Form.Control.Feedback>
//             </Form.Group>
//             <br />
//             <Button variant="success" type="submit" className="w-100">
//               Register
//             </Button>
//             <div className="text-center mt-3">
//               <p>
//                 You already have an account? <a href="/sellerlogin">Login</a>
//               </p>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignUpPage;



import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image,Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import sellerimg from "../../assets/Img/sellersignupimg.jpg";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");
  const [religion, setReligion] = useState("");
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
    const re = cc; // Starts with 0, followed by 9 digits
    return re.test(String(phone));
  };

  const validateCity = (city) => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(String(city));
  };

  const validatePassword = (password) => {
    return password.length === 8;
  };

  const validateBusinessName = (businessName) => {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(String(businessName));
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
    setEmail(input);

    if (!validateEmail(input)) {
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
        password: "Password must be exactly 8 characters long",
      }));
    } else {
      setErrors((prevErrors) => {
        const { password, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleBusinessNameChange = (e) => {
    const input = e.target.value;
    const onlyLettersAndSpaces = input.replace(/[^a-zA-Z\s]/g, ""); // Remove non-letter characters except spaces

    setBusinessName(onlyLettersAndSpaces);

    if (!validateBusinessName(onlyLettersAndSpaces)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        businessName: "Business Name should only contain letters and spaces",
      }));
    } else {
      setErrors((prevErrors) => {
        const { businessName, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleCityChange = (e) => {
    const input = e.target.value;
    const onlyLettersAndSpaces = input.replace(/[^a-zA-Z\s]/g, ""); // Remove non-letter characters except spaces

    setCity(onlyLettersAndSpaces);

    if (!validateCity(onlyLettersAndSpaces)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: "City should only contain letters and spaces",
      }));
    } else {
      setErrors((prevErrors) => {
        const { city, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleReligionChange = (e) => {
    setReligion(e.target.value);
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
    if (!businessName || !validateBusinessName(businessName))
      validationErrors.businessName =
        "Business Name is required and should only contain letters";
    if (!city || !validateCity(city))
      validationErrors.city =
        "City is required and should only contain letters";
    if (!religion)
      validationErrors.religion = "Religion is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        name,
        email,
        phone,
        password,
        businessName,
        city,
        religion,
      });
      alert(response.data);
      navigate("/sellerlogin");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex flex-column  align-items-center">
    {/* <h1 className=" mb-4" style={{ fontSize: "45px", color: "black" }}>
      WELCOME TO SELLER DASHBOARD
    </h1> */}
    <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "1200px", backgroundColor: "#C9E9F2", height: "800px" }}>
      <Row className="h-100">
        <Col md={4} className="p-0">
          <div className="image-container">
            <Image
              src={sellerimg}
              alt="SignUp"
              style={{ width: "450px", height: "450px", borderRadius: "10px" ,marginLeft:"20px",marginTop:"70px"}}
            />
          </div>
        </Col>
        <Col
          md={8}
          className="d-flex align-items-center justify-content-center"
        >
          <Form className="w-75 form-background" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4" style={{ fontSize: "30px", color: "#0B4EFC", fontFamily: "Arial, sans-serif" }}>
                Welcome to Seller SignUp
              </h2>
            <Form.Group controlId="formBusinessName">
              <Form.Control
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={handleBusinessNameChange}
                isInvalid={!!errors.businessName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.businessName}
              </Form.Control.Feedback>
            </Form.Group><br/>

            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Seller Name"
                value={name}
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
                onChange={handlePhoneChange}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
          
          
            
            <Form.Group controlId="formCity">
              <Form.Control
                type="text"
                placeholder="City"
                value={city}
                onChange={handleCityChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formReligion">
              <Form.Control
                as="select"
                value={religion}
                onChange={handleReligionChange}
                isInvalid={!!errors.religion}
              >
                <option value="">Select Religion</option>
                <option value="Christianity">Christianity</option>
                <option value="Islam">Islam</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.religion}
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group><br/>
            <Button variant="primary" type="submit" className="w-100">
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
      </Card>
    </Container>
  );
};

export default SignUpPage;

