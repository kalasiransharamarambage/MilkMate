import React, { useState } from 'react';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({
      rating,
      reviewTitle,
      reviewContent,
      userName,
      userEmail,
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Review Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.ratingContainer}>
          <span style={styles.label}>Rating</span>
          <div style={styles.starsContainer}>
            {[...Array(5)].map((star, index) => (
              <span
                key={index}
                style={index < rating ? styles.starSelected : styles.star}
                onClick={() => handleRating(index)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Review title</label>
          <input
            type="text"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Review content</label>
          <textarea
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            style={styles.textarea}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>User name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>User Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            ADD REVIEW
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#C9E9F2',
    padding: '30px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#fff',
    textAlign: 'left',
    color: '#000000',
    fontFamily:'Bold'
  },
  ratingContainer: {
    marginBottom: '25px',
  },
  starsContainer: {
    marginTop: '5px',
    textAlign: 'left',
    
    
  },
  label: {
    color: '#fff',
    display: 'block',
    marginBottom: '5px',
    color: '#000000'
  },
  star: {
    fontSize: '24px',
    color: '#bbb',
    cursor: 'pointer',
  },
  starSelected: {
    fontSize: '24px',
    color: '#FFD700',
    cursor: 'pointer',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    height: '60px',
    boxSizing: 'border-box',
   
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
    padding: '10px',
    borderRadius: '15px',
    border: 'none',
    backgroundColor: '#0B4EFC',
    color: '#fff',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
};

export default ReviewForm;
