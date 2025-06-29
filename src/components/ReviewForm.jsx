import React, { useState } from 'react';

export default function ReviewForm() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}, Rating: ${rating}, Review: ${review}`);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Submit Your Review</h2>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={styles.input}
      />

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
        style={styles.select}
      >
        <option value="">Select Rating</option>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>

      <textarea
        placeholder="Write your review here"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        style={styles.textarea}
      />

      <button type="submit" style={styles.button}>Submit Review</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '15px',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
