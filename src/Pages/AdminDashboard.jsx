// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Avatar, Grid, Box } from '@mui/material';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch products from the temporary storage
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/seller/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     // Fetch users from the backend (assuming there's an endpoint for this)
//     const fetchUsers = async () => {
//       // Replace with your actual endpoint
//       const usersData = [
//         { id: 1, role: 'Seller', name: 'Hitha Hoda Mikiri', image: 'seller-image-url' },
//         { id: 2, role: 'Customer', name: 'John Doe', image: 'customer-image-url' },
//       ];
//       setUsers(usersData);
//     };

//     fetchProducts();
//     fetchUsers();
//   }, []);

//   const handleApprove = async (productId) => {
//     try {
//       const response = await axios.post(`http://localhost:3000/admin/approve-product/${productId}`);
//       setProducts(products.filter(product => product._id !== productId));
//       alert('Product approved and saved to the database successfully!');
//     } catch (error) {
//       console.error('Error approving product:', error);
//       alert('Failed to approve product');
//     }
//   };

//   const handleReject = async (productId) => {
//     try {
//       // For now, just remove the product from the list without saving to the main collection
//       setProducts(products.filter(product => product._id !== productId));
//       alert('Product rejected');
//     } catch (error) {
//       console.error('Error rejecting product:', error);
//       alert('Failed to reject product');
//     }
//   };

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

//   return (
//     <Container>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Welcome to Admin Dashboard
//       </Typography>

//       <Box mb={4}>
//         <Typography variant="h6" component="h2" gutterBottom>
//           Product ({products.length})
//         </Typography>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Products</TableCell>
//                 <TableCell>Price</TableCell>
//                 <TableCell>Quantity</TableCell>
//                 <TableCell>Sub-total</TableCell>
//                 <TableCell>Approval</TableCell>
//                 <TableCell>Delete</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.map((product) => (
//                 <TableRow key={product._id}>
//                   <TableCell>
//                     <Grid container alignItems="center" spacing={2}>
//                       <Grid item>
//                       <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
//                       </Grid>
//                       <Grid item>{product.productName}</Grid>
//                     </Grid>
//                   </TableCell>
//                   <TableCell>${product.purchasePrice}</TableCell>
//                   <TableCell>{product.quantity}</TableCell>
//                   <TableCell>${product.purchasePrice * product.quantity}</TableCell>
//                   <TableCell>
//                     <Grid container spacing={1}>
//                       {!product.approved && (
//                         <>
//                           <Grid item>
//                             <Button
//                               variant="contained"
//                               color="success"
//                               size="small"
//                               onClick={() => handleApprove(product._id)}
//                             >
//                               Approve
//                             </Button>
//                           </Grid>
                          
//                         </>
//                       )}
//   {product.approved && (
//                         <Grid item>
//                           <Typography variant="body2" color="success.main">
//                             Approved
//                           </Typography>
//                         </Grid>
//                       )}
//                       </Grid>
//                       </TableCell><TableCell>
//                       <Grid item>
//                         <Button
//                           variant="contained"
//                           color="error"
//                           size="small"
//                           onClick={() => handleDelete(product._id)}
//                         >
//                           Delete
//                         </Button>
//                       </Grid>
                    
                   
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>

    
//     </Container>
//   );
// };

// export default AdminDashboard;




import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar,
  Grid,
  Box,
} from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchProducts();
    fetchUsers();
  }, []);

  const handleApprove = async (productId) => {
    try {
      const response = await axios.put(`http://localhost:3000/admin/approve-product/${productId}`);
      if (response.data.success) {
        setProducts(products.map(product => product._id === productId ? { ...product, approved: true } : product));
        alert('Product approved and saved to the database successfully!');
      } else {
        alert('Failed to approve product');
      }
    } catch (error) {
      console.error('Error approving product:', error);
      alert('Failed to approve product');
    }
  };

  const handleReject = async (productId) => {
    try {
      await axios.put(`http://localhost:3000/admin/reject-product/${productId}`);
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
          Products ({products.length})
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Sub-total</TableCell>
                <TableCell>Approval</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item>
                        <Avatar alt={product.productName} src={`http://localhost:3000/${product.productImage}`} />
                      </Grid>
                      <Grid item>{product.productName}</Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>${product.purchasePrice}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>${product.purchasePrice * product.quantity}</TableCell>
                  <TableCell>
                    {!product.approved ? (
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => handleApprove(product._id)}
                      >
                        Approve
                      </Button>
                    ) : (
                      <Typography variant="body2" color="success">
                        Approved
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </Button>
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
