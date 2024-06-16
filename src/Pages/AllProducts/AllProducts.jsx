
// import React, { useState, useEffect } from 'react';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import { Avatar,Grid } from '@mui/material';
// import {  Button } from "react-bootstrap";

// function AllProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/seller/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3000/admin/delete-product/${productId}`);
//       setProducts(products.filter(product => product._id !== productId));
//       alert('Product deleted successfully');
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       alert('Failed to delete product');
//     }
//   };

//   const handleStatusChange = (productId, newStatus) => {
//     const product = products.find(p => p._id === productId);
//     const updatedProduct = { ...product, approvalStatus: newStatus };

//     axios.post(`http://localhost:3000/seller/products/update/${productId}`, updatedProduct)
//       .then(response => {
//         setProducts(products.map(p => p._id === productId ? updatedProduct : p));
//       })
//       .catch(error => {
//         console.error('There was an error updating the product!', error);
//       });
//   };

//   const getColor = (approvalStatus, paymentStatus) => {
//     if (paymentStatus === 'unpaid' && approvalStatus === 'waiting') {
//       return 'warning';
//     }
//     switch (approvalStatus) {
//       case 'approved':
//         return 'success';
//       case 'waiting':
//         return 'primary';
//       default:
//         return 'secondary';
//     }
//   };

//   const renderTableRows = (filterKey, filterValue) => {
//     return products
//       .filter(product => product[filterKey] === filterValue)
//       .map(product => (
//         <tr key={product._id}>
//           <td>
//             <div className='d-flex align-items-center'>
//               <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>{product.productName}</p>
//               </div>
//             </div>
//           </td>
//           <td>
//           <div className='d-flex align-items-center'>
           
//             <div className='ms-3'>
//               <p className='fw-bold mb-1'>{product.sellerName}</p>
//             </div></div></td>
        
//           <td>
//             <MDBBadge color={getColor(product.approvalStatus, product.paymentStatus)} pill>
//               {product.approvalStatus || product.paymentStatus}
//             </MDBBadge>
//           </td>
//           <td>
//           <Grid item>
//         <Button
//                           variant="danger"
//                           color="error"
//                           size="small"
//                           onClick={() => handleDelete(product._id)}
//                         >
//                           Delete
//                         </Button>
//                         </Grid>
//           </td>
//         </tr>
//       ));
//   };

//   const renderAllProductsRows = () => {
//     return products.map(product => (
//       <tr key={product._id}>
//         <td>
//           <div className='d-flex align-items-center'>
//             <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
//             <div className='ms-3'>
//               <p className='fw-bold mb-1'>{product.productName}</p>
//             </div>
          
//           </div>
//         </td>
//         <td>
//           <div className='d-flex align-items-center'>
           
//             <div className='ms-3'>
//               <p className='fw-bold mb-1'>{product.sellerName}</p>
//             </div></div></td>
//         <td>
//           <MDBBadge color={getColor(product.approvalStatus, product.paymentStatus)} pill>
//             {product.approvalStatus || product.paymentStatus}
//           </MDBBadge>
//         </td>
//         <td>
//         <Grid item>
//         <Button
//                           variant="danger"
//                           color="error"
//                           size="small"
//                           onClick={() => handleDelete(product._id)}
//                         >
//                           Delete
//                         </Button>
//                         </Grid>
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <Tabs
//       defaultActiveKey="all"
//       id="fill-tab-example"
//       className="mb-3"
//       fill
//       style={{ fontFamily: "bold", fontSize: "20px" }}
//     >
//       <Tab eventKey="all" title="All">
//         <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
//           All Products
//         </span>
//         <MDBContainer className="mt-3">
//           <div className='shadow-4 rounded-5 overflow-hidden'>
//             <div className='table-responsive'>
//               <MDBTable>
//                 <MDBTableHead light>
//                   <tr>
//                   <th>Product Name</th>
//                     <th>Seller Name</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </MDBTableHead>
//                 <MDBTableBody style={{ verticalAlign: 'middle' }}>
//                   {renderAllProductsRows()}
//                 </MDBTableBody>
//               </MDBTable>
//             </div>
//           </div>
//         </MDBContainer>
//       </Tab>

//       <Tab eventKey="approved" title="Approved">
//         <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
//           Approved Products
//         </span>
//         <MDBContainer className="mt-3">
//           <div className='shadow-4 rounded-5 overflow-hidden'>
//             <div className='table-responsive'>
//               <MDBTable>
//                 <MDBTableHead light>
//                   <tr>
//                   <th> Product Name</th>
//                     <th>Seller Name</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </MDBTableHead>
//                 <MDBTableBody style={{ verticalAlign: 'middle' }}>
//                   {renderTableRows('approvalStatus', 'approved')}
//                 </MDBTableBody>
//               </MDBTable>
//             </div>
//           </div>
//         </MDBContainer>
//       </Tab>

//       <Tab eventKey="waiting" title="Waiting">
//         <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
//           Waiting Products
//         </span>
//         <MDBContainer className="mt-3">
//           <div className='shadow-4 rounded-5 overflow-hidden'>
//             <div className='table-responsive'>
//               <MDBTable>
//                 <MDBTableHead light>
//                   <tr>
//                   <th> Product Name</th>
//                   <th>Seller Name</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </MDBTableHead>
//                 <MDBTableBody style={{ verticalAlign: 'middle' }}>
//                   {renderTableRows('approvalStatus', 'waiting')}
//                 </MDBTableBody>
//               </MDBTable>
//             </div>
//           </div>
//         </MDBContainer>
//       </Tab>

//       <Tab eventKey="unpaid" title="Unpaid">
//         <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
//           Unpaid Products
//         </span>
//         <MDBContainer className="mt-3">
//           <div className='shadow-4 rounded-5 overflow-hidden'>
//             <div className='table-responsive'>
//               <MDBTable>
//                 <MDBTableHead light>
//                   <tr>
//                   <th> Product Name</th>
//                   <th>Seller Name</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </MDBTableHead>
//                 <MDBTableBody style={{ verticalAlign: 'middle' }}>
//                   {renderTableRows('paymentStatus', 'unpaid')}
//                 </MDBTableBody>
//               </MDBTable>
//             </div>
//           </div>
//           <Link to="/sellerpayment">
//             <MDBBtn
//               className='fw-bold'
//               color='success'
//               rounded
//               size='sm'
//               rippleColor='dark'
//               style={{ display: 'block', margin: '30px auto 0' }}
//             >
//               Pay All
//             </MDBBtn>
//           </Link>
//         </MDBContainer>
//       </Tab>
//     </Tabs>
//   );
// }

// export default AllProducts;











import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Avatar, Grid } from '@mui/material';
import { Button, Form } from "react-bootstrap";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/seller/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/admin/delete-product/${productId}`);
      setProducts(products.filter(product => product._id !== productId));
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleStatusChange = (productId, newStatus) => {
    const product = products.find(p => p._id === productId);
    const updatedProduct = { ...product, approvalStatus: newStatus };

    axios.post(`http://localhost:3000/seller/products/update/${productId}`, updatedProduct)
      .then(response => {
        setProducts(products.map(p => p._id === productId ? updatedProduct : p));
      })
      .catch(error => {
        console.error('There was an error updating the product!', error);
      });
  };

  const getColor = (approvalStatus, paymentStatus) => {
    if (paymentStatus === 'unpaid' && approvalStatus === 'waiting') {
      return 'warning';
    }
    switch (approvalStatus) {
      case 'approved':
        return 'success';
      case 'waiting':
        return 'primary';
      default:
        return 'secondary';
    }
  };

  const renderTableRows = (filterKey, filterValue) => {
    return products
      .filter(product => product[filterKey] === filterValue && product.sellerName && product.sellerName.toLowerCase().includes(search.toLowerCase()))
      .map(product => (
        <tr key={product._id}>
          <td>
            <div className='d-flex align-items-center'>
              <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{product.productName}</p>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{product.sellerName}</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color={getColor(product.approvalStatus, product.paymentStatus)} pill>
              {product.approvalStatus || product.paymentStatus}
            </MDBBadge>
          </td>
          <td>
            <Grid item>
              <Button
                variant="danger"
                color="error"
                size="small"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </Button>
            </Grid>
          </td>
        </tr>
      ));
  };

  const renderAllProductsRows = () => {
    return products
      .filter(product => product.sellerName && product.sellerName.toLowerCase().includes(search.toLowerCase()))
      .map(product => (
        <tr key={product._id}>
          <td>
            <div className='d-flex align-items-center'>
              <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{product.productName}</p>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{product.sellerName}</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color={getColor(product.approvalStatus, product.paymentStatus)} pill>
              {product.approvalStatus || product.paymentStatus}
            </MDBBadge>
          </td>
          <td>
            <Grid item>
              <Button
                variant="danger"
                color="error"
                size="small"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </Button>
            </Grid>
          </td>
        </tr>
      ));
  };

  return (
    <Tabs
      defaultActiveKey="all"
      id="fill-tab-example"
      className="mb-3"
      fill
      style={{ fontFamily: "bold", fontSize: "20px" }}
    >
      <Tab eventKey="all" title="All">
        <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
          All Products
        </span>
        <Form.Control style={{ width: '800px', maxWidth: '100%', fontSize: '16px'}}
          type="text"
          placeholder="Search by Seller Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Product Name</th>
                    <th>Seller Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderAllProductsRows()}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </MDBContainer>
      </Tab>

      <Tab eventKey="approved" title="Approved">
        <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
          Approved Products
        </span>
        <Form.Control
          type="text"
          placeholder="Search by seller name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Product Name</th>
                    <th>Seller Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderTableRows('approvalStatus', 'approved')}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </MDBContainer>
      </Tab>

      <Tab eventKey="waiting" title="Waiting">
        <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
          Waiting Products
        </span>
        <Form.Control
          type="text"
          placeholder="Search by seller name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Product Name</th>
                    <th>Seller Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderTableRows('approvalStatus', 'waiting')}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </MDBContainer>
      </Tab>

      <Tab eventKey="unpaid" title="Unpaid">
        <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
          Unpaid Products
        </span>
        <Form.Control
          type="text"
          placeholder="Search by seller name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Product Name</th>
                    <th>Seller Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderTableRows('paymentStatus', 'unpaid')}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
          <Link to="/sellerpayment">
            <MDBBtn
              className='fw-bold'
              color='success'
              rounded
              size='sm'
              rippleColor='dark'
              style={{ display: 'block', margin: '30px auto 0' }}
            >
              Pay All
            </MDBBtn>
          </Link>
        </MDBContainer>
      </Tab>
    </Tabs>
  );
}

export default AllProducts;





// src/Components/AllProducts.jsx

// import React, { useState, useEffect } from 'react';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBadge } from 'mdb-react-ui-kit';
// import { Avatar, Grid } from '@mui/material';
// import { Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// function AllProducts() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState('');
//   const token = localStorage.getItem('authToken');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/seller/products', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [token]);

//   const handleDelete = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/admin/delete-product/${productId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setProducts(products.filter(product => product._id !== productId));
//       alert('Product deleted successfully');
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       alert('Failed to delete product');
//     }
//   };

//   const handleStatusChange = (productId, newStatus) => {
//     const product = products.find(p => p._id === productId);
//     const updatedProduct = { ...product, approvalStatus: newStatus };

//     axios.post(`http://localhost:3000/api/seller/products/update/${productId}`, updatedProduct, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then(response => {
//       setProducts(products.map(p => p._id === productId ? updatedProduct : p));
//     })
//     .catch(error => {
//       console.error('There was an error updating the product!', error);
//     });
//   };

//   const getColor = (approvalStatus, paymentStatus) => {
//     if (paymentStatus === 'unpaid' && approvalStatus === 'waiting') {
//       return 'warning';
//     }
//     switch (approvalStatus) {
//       case 'approved':
//         return 'success';
//       case 'waiting':
//         return 'primary';
//       default:
//         return 'secondary';
//     }
//   };

//   const renderTableRows = (filterKey, filterValue) => {
//     return products
//       .filter(product => product[filterKey] === filterValue && product.sellerName && product.sellerName.toLowerCase().includes(search.toLowerCase()))
//       .map(product => (
//         <tr key={product._id}>
//           <td>
//             <div className='d-flex align-items-center'>
//               <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>{product.productName}</p>
//               </div>
//             </div>
//           </td>
//           <td>
//             <div className='d-flex align-items-center'>
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>{product.sellerName}</p>
//               </div>
//             </div>
//           </td>
//           <td>
//             <MDBBadge color={getColor(product.approvalStatus, product.paymentStatus)} pill>
//               {product.approvalStatus || product.paymentStatus}
//             </MDBBadge>
//           </td>
//           <td>
//             <Grid item>
//               <Button
//                 variant="danger"
//                 color="error"
//                 size="small"
//                 onClick={() => handleDelete(product._id)}
//               >
//                 Delete
//               </Button>
//             </Grid>
//           </td>
//         </tr>
//       ));
//   };

//   const renderAllProductsRows = () => {
//     return products
//       .filter(product => product.sellerName && product.sellerName.toLowerCase().includes(search.toLowerCase()))
//       .map(product => (
//         <tr key={product._id}>
//           <td>
//             <div className='d-flex align-items-center'>
//               <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>{product.productName}</p>
//               </div>
//             </div>
//           </td>
//           <td>
//             <div className='d-flex align-items-center'>
//               <div className='ms-3'>
//                 <p className='fw-bold mb-1'>{product.sellerName}</p>
//               </div>
//             </div>
//           </td>
//           <td>
//             <MDBBadge color={getColor(product.approvalStatus, product.paymentStatus)} pill>
//               {product.approvalStatus || product.paymentStatus}
//             </MDBBadge>
//           </td>
//           <td>
//             <Grid item>
//               <Button
//                 variant="danger"
//                 color="error"
//                 size="small"
//                 onClick={() => handleDelete(product._id)}
//               >
//                 Delete
//               </Button>
//             </Grid>
//           </td>
//         </tr>
//       ));
//   };

//   return (
//     <MDBContainer>
//       <Form.Control
//         type="text"
//         placeholder="Search by seller name"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-3"
//         style={{ width: '1000px', margin: '0 auto', display: 'block' }}
//       />
//       <Tabs
//         defaultActiveKey="all"
//         id="fill-tab-example"
//         className="mb-3"
//         fill
//       >
//         <Tab eventKey="all" title="All Products">
//           <MDBTable>
//             <MDBTableHead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Seller Name</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </MDBTableHead>
//             <MDBTableBody>
//               {renderAllProductsRows()}
//             </MDBTableBody>
//           </MDBTable>
//         </Tab>
//         <Tab eventKey="approved" title="Approved">
//           <MDBTable>
//             <MDBTableHead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Seller Name</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </MDBTableHead>
//             <MDBTableBody>
//               {renderTableRows('approvalStatus', 'approved')}
//             </MDBTableBody>
//           </MDBTable>
//         </Tab>
//         <Tab eventKey="waiting" title="Waiting">
//           <MDBTable>
//             <MDBTableHead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Seller Name</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </MDBTableHead>
//             <MDBTableBody>
//               {renderTableRows('approvalStatus', 'waiting')}
//             </MDBTableBody>
//           </MDBTable>
//         </Tab>
//       </Tabs>
//     </MDBContainer>
//   );
// }

// export default AllProducts;
