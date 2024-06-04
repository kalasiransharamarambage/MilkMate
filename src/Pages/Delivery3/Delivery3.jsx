import React, { useState } from 'react';
import profileimg from "../../assets/Img/profileimg.png";

const Delivery3 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const allOrders = [
    {
      id: '1',
      orderNumber: '#12342',
      items: '5 items',
      name: 'S.S. Chethana',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      orderNumber: '#45328',
      items: '3 items',
      name: 'S.K. Shriyani',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      orderNumber: '#78601',
      items: '2 items',
      name: 'D.V. Gayashi',
      image: 'https://via.placeholder.com/50',
    },
  ];

  const deliveredOrders = [
    {
      id: '1',
      orderNumber: '#62578',
      items: '2 items',
      name: 'S.S. Malliyawadu',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      orderNumber: '#65601',
      items: '3 items',
      name: 'D.V. Nawodya',
      image: 'https://via.placeholder.com/50',
      notDeliveredYet: true, // Add this flag to handle conditional rendering
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const renderOrderItem = (item) => (
    <div style={styles.orderItem} key={item.id}>
      <img src={profileimg} style={styles.image} />
      <div style={styles.orderInfo}>
        <div style={styles.orderNumber}>Order {item.orderNumber}</div>
        <div style={styles.orderItems}>{item.items}</div>
        <div style={styles.orderName}>{item.name}</div>
      </div>
      <div style={styles.detailsButton}>Order Details</div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.searchBarContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search orders"
          style={styles.searchBar}
        />
      </div>
      <div style={styles.header}>All Orders</div>
      <div style={styles.list}>
        {allOrders.map((order) => renderOrderItem(order))}
      </div>
      <div style={styles.header}>Delivered Orders</div>
      <div style={styles.list}>
        {deliveredOrders.map((order) => renderOrderItem(order))}
      </div>
      {deliveredOrders.some(order => order.notDeliveredYet) && (
        <div>
          <div style={styles.notDeliveredText}>Not delivered yet</div>
          <div style={styles.list}>
            {deliveredOrders.map((order) => renderOrderItem(order))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '16px',
  },
  searchBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  searchBar: {
    flex: 1,
    padding: '8px',
    marginRight: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  header: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '16px 0',
  },
  list: {
    marginBottom: '16px',
  },
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    marginBottom: '10px',
    backgroundColor: '#C9E9F2',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    marginRight: '12px',
  },
  orderInfo: {
    flex: 1,
  },
  orderNumber: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  orderItems: {
    fontSize: '14px',
    color: '#6c757d',
  },
  orderName: {
    fontSize: '14px',
    color: '#007bff',
  },
  notDeliveredText: {
    fontSize: '20px', // same as header
    fontWeight: 'bold',
    marginTop: '16px',
    color: '#000',
    textAlign: 'left',
  },
  detailsButton: {
    color: '#FFFFFF',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#0B4EFC',
  },
  '@media (max-width: 768px)': {
    searchBarContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    searchBar: {
      marginBottom: '8px',
      width: '100%',
    },
    orderItem: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    image: {
      marginBottom: '8px',
    },
    detailsButton: {
      alignSelf: 'flex-start',
      marginTop: '8px',
    },
  },
};

export default Delivery3;
