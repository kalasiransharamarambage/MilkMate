import React from 'react';
import deliveryImg from "../../assets/Img/deliveryImg.jpg";

const deliveries = [
  { title: 'Total Deliveries', count: 6 },
  { title: 'Completed Today', count: 2 },
  { title: 'On Time', count: 4 }
];

// Move the "On Time" box to the end of the array
const sortedDeliveries = [...deliveries].sort((a, b) => (a.title === 'On Time' ? 1 : -1));

const App = () => {
  const styles = {
    app: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#C9E9F2',
      margin: '20px auto',
      maxWidth: '1100px',
    },
    header: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      margin: '0 auto',
      overflow: 'hidden'
    },
    headerImage: {
      width: '100%',
      height: '600px',
      objectFit: 'cover'
    },
    headerTitle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '5px 10px',
      fontSize: '40px',
      whiteSpace: 'nowrap',
      maxWidth: '90%'
    },
    dashboardTitleContainer: {
      width: '100%',
      maxWidth: '600px',
      margin: '20px auto 0',
      textAlign: 'center'
    },
    dashboardTitle: {
      fontSize: '40px',
      fontWeight: 'bold',
    },
    dashboard: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      flexWrap: 'wrap'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      padding: '20px',
      width: '200px',
      textAlign: 'center',
      height: '200px'
    },
    cardTitle: {
      marginBottom: '10px',
      fontSize: '18px'
    },
    cardCount: {
      fontSize: '24px',
      margin: '10px 0'
    },
    cardButton: {
      backgroundColor: 'white',
      border: '1px solid #007BFF',
      borderRadius: '3px',
      color: '#007BFF',
      cursor: 'pointer',
      padding: '5px 10px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '10px'
    },
    '@media (max-width: 768px)': {
      header: {
        height: 'auto'
      },
      headerTitle: {
        fontSize: '20px'
      },
      dashboardTitle: {
        fontSize: '32px'
      },
      card: {
        maxWidth: '100%',
        margin: '5px'
      }
    },
    '@media (max-width: 480px)': {
      headerTitle: {
        fontSize: '12px'
      },
      dashboardTitle: {
        fontSize: '24px'
      },
      cardTitle: {
        fontSize: '12px'
      },
      cardCount: {
        fontSize: '18px'
      },
      cardButton: {
        fontSize: '8px'
      }
    }
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <img src={deliveryImg} alt="Delivery" style={styles.headerImage} />
        <h1 style={styles.headerTitle}>Welcome to Delivery Management System</h1>
      </header>
      <div style={styles.dashboardTitleContainer}>
        <h2 style={styles.dashboardTitle}>Dashboard</h2>
      </div>
      <div style={styles.dashboard}>
        {sortedDeliveries.map((delivery, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.cardTitle}>
              {delivery.title}
            </h2>
            <p style={styles.cardCount}>{delivery.count}</p>
            <button
              style={styles.cardButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#007BFF', e.target.style.color = 'white')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'white', e.target.style.color = '#007BFF')}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
