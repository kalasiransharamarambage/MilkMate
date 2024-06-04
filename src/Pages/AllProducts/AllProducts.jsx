import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
import yogurt from "../../assets/Img/yogurt.jpg";
import milkPowder from "../../assets/Img/milkPowder.jpg";
import cheese from "../../assets/Img/cheese.jpg";

const products = [
  { id: 1, name: "Yogurt", img: yogurt, status: "Unpayed", quantity: 100 },
  { id: 2, name: "Milk Powder", img: milkPowder, status: "Waiting", quantity: 200 },
  { id: 3, name: "Cheese", img: cheese, status: "Ongoing", quantity: 20 }
];

function AllProducts() {
  const renderTableRows = (filterStatus) => {
    return products
      .filter(product => filterStatus ? product.status === filterStatus : true)
      .map(product => (
        <tr key={product.id}>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={product.img}
                alt={product.name}
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{product.name}</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color={product.status === 'Unpayed' ? 'primary' : product.status === 'Waiting' ? 'warning' : 'success'} pill>
              {product.status}
            </MDBBadge>
          </td>
          <td>
            <MDBBtn className='fw-bold' color='danger' rounded size='sm' rippleColor='dark'>
              Delete
            </MDBBtn>
          </td>
          {filterStatus === 'Unpayed' && (
            <td>
              <MDBBtn className='fw-bold' color='success' rounded size='sm' rippleColor='dark'>
                Pay Now
              </MDBBtn>
            </td>
          )}
        </tr>
      ));
  };

  const renderAvailableTableRows = () => {
    return products.map(product => (
      <tr key={product.id}>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src={product.img}
              alt={product.name}
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{product.name}</p>
            </div>
          </div>
        </td>
        <td>
          <span className='fw-bold mb-1'>{product.quantity}</span>
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
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderTableRows()}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </MDBContainer>
      </Tab>

      <Tab eventKey="ongoing" title="Ongoing">
        <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
          Ongoing Products
        </span>
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderTableRows('Ongoing')}
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
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderTableRows('Waiting')}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </MDBContainer>
      </Tab>

      <Tab eventKey="unpayed" title="Unpayed">
        <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
          Unpayed Products
        </span>
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Payments</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderTableRows('Unpayed')}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
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
        </MDBContainer>
      </Tab>

      <Tab eventKey="details" title="Details">
        <span style={{ display: 'block', textAlign: 'center', fontFamily: 'bold', fontSize: '28px' }}>
          Available Products
        </span>
        <MDBContainer className="mt-3">
          <div className='shadow-4 rounded-5 overflow-hidden'>
            <div className='table-responsive'>
              <MDBTable>
                <MDBTableHead light>
                  <tr>
                    <th>Name</th>
                    <th>Available Quantity</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ verticalAlign: 'middle' }}>
                  {renderAvailableTableRows()}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </MDBContainer>
      </Tab>
    </Tabs>
  );
}

export default AllProducts;
