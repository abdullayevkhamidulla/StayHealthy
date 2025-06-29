import React from 'react';

export default function InstantConsultation() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Instant Consultation</h2>
      <p style={styles.text}>
        Need urgent help? Connect with a doctor instantly and get professional advice without waiting.
      </p>
      <button style={styles.button}>Start Consultation</button>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '500px',
    margin: '20px auto',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '10px',
    color: '#2c3e50',
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
