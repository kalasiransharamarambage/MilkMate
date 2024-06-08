// import React from 'react';
// import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Avatar, Grid, Box } from '@mui/material';

// const products = [
//   { id: 1, name: 'Original Thissamaharama Home Made Curd', price: 40, quantity: 1, image: 'curd-image-url' },
//   { id: 2, name: 'Home made Fresh Milk 750ml', price: 30, quantity: 1, image: 'milk-image-url' },
// ];

// const users = [
//   { id: 1, role: 'Seller', name: 'Hitha Hoda Mikiri', image: 'seller-image-url' },
//   { id: 2, role: 'Customer', name: 'John Doe', image: 'customer-image-url' },
// ];

// const AdminDashboard = () => {
//   return (
//     <Container>
//       <Typography variant="h4" component="h1" gutterBottom>Welcome to Admin Dashboard</Typography>

//       <Box mb={4}>
//         <Typography variant="h6" component="h2" gutterBottom>Product ({products.length})</Typography>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Products</TableCell>
//                 <TableCell>Price</TableCell>
//                 <TableCell>Quantity</TableCell>
//                 <TableCell>Sub-total</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.map((product) => (
//                 <TableRow key={product.id}>
//                   <TableCell>
//                     <Grid container alignItems="center" spacing={2}>
//                       <Grid item>
//                         <Avatar alt={product.name} src={product.image} />
//                       </Grid>
//                       <Grid item>
//                         {product.name}
//                       </Grid>
//                     </Grid>
//                   </TableCell>
//                   <TableCell>${product.price}</TableCell>
//                   <TableCell>{product.quantity}</TableCell>
//                   <TableCell>${product.price * product.quantity}</TableCell>
//                   <TableCell>
//                     <Button variant="contained" color="success" size="small">Approve</Button>
//                     <Button variant="outlined" color="error" size="small" sx={{ ml: 1 }}>Reject</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

//       <Box>
//         <Typography variant="h6" component="h2" gutterBottom>User ({users.length})</Typography>
//         <Grid container spacing={2}>
//           {users.map((user) => (
//             <Grid item xs={12} md={6} key={user.id}>
//               <Paper elevation={3} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
//                 <Avatar alt={user.name} src={user.image} sx={{ mr: 2 }} />
//                 <Box flexGrow={1}>
//                   <Typography variant="body1">{user.role}</Typography>
//                   <Typography variant="body2">{user.name}</Typography>
//                 </Box>
//                 <Button variant="outlined" color="error" size="small">Reject</Button>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default AdminDashboard;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductApproval = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/seller/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const approveProduct = async (id) => {
//     try {
//       const response = await axios.post(`http://localhost:3000/admin/approve-product/${id}`);
//       console.log(response.data);
//       setProducts(products.map(product => product._id === id ? { ...product, approved: true } : product));
//       alert('Product approved successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Failed to approve product');
//     }
//   };

//   return (
//     <div>
//       <h2>Product Approval</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             {product.productName} - {product.approved ? 'Approved' : 'Pending'}
//             {!product.approved && <button onClick={() => approveProduct(product._id)}>Approve</button>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductApproval;



import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Avatar, Grid, Box } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/seller/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch users from the backend (assuming there's an endpoint for this)
    const fetchUsers = async () => {
      // Replace with your actual endpoint
      const usersData = [
        { id: 1, role: 'Seller', name: 'Hitha Hoda Mikiri', image: 'seller-image-url' },
        { id: 2, role: 'Customer', name: 'John Doe', image: 'customer-image-url' },
      ];
      setUsers(usersData);
    };

    fetchProducts();
    fetchUsers();
  }, []);

  const handleApprove = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:3000/admin/approve-product/${productId}`);
      setProducts(products.map(product => product._id === productId ? { ...product, approved: true } : product));
      alert('Product approved successfully!');
    } catch (error) {
      console.error('Error approving product:', error);
      alert('Failed to approve product');
    }
  };

  const handleReject = async (productId) => {
    try {
      // Implement the reject functionality if needed
      // For now, just remove the product from the list
      setProducts(products.filter(product => product._id !== productId));
      alert('Product rejected');
    } catch (error) {
      console.error('Error rejecting product:', error);
      alert('Failed to reject product');
    }
  };

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

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Admin Dashboard
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" component="h2" gutterBottom>
          Product ({products.length})
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Sub-total</TableCell>
                <TableCell>Approve</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item>
                        <Avatar alt={product.name} src={product.productImage} />
                      </Grid>
                      <Grid item>{product.productName}</Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>${product.purchasePrice}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>${product.purchasePrice * product.quantity}</TableCell>
                  <TableCell>
                    <Grid container spacing={1}>
                      {!product.approved && (
                        <>
                          <Grid item>
                            <Button
                              variant="contained"
                              color="success"
                              size="small"
                              onClick={() => handleApprove(product._id)}
                            >
                              Approve
                            </Button>
                          </Grid>
                         
                        </>
                      )}
                       {product.approved && (
                        <Grid item>
                          <Typography variant="body2" color="success.main">
                            Approved
                          </Typography>
                        </Grid>
                      )}
                      </Grid>
                      </TableCell>
                      <TableCell>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </Button>
                      </Grid>
                     
                   
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      
    </Container>
  );
};

export default AdminDashboard;
