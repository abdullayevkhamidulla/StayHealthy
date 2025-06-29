import React, { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    phone: '123-456-7890',
  });

  const [editMode, setEditMode] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);

  const handleChange = (e) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Profile Information</h2>

      <label style={styles.label}>Name:</label>
      {editMode ? (
        <input
          style={styles.input}
          name="name"
          value={tempProfile.name}
          onChange={handleChange}
        />
      ) : (
        <p>{profile.name}</p>
      )}

      <label style={styles.label}>Phone:</label>
      {editMode ? (
        <input
          style={styles.input}
          name="phone"
          value={tempProfile.phone}
          onChange={handleChange}
        />
      ) : (
        <p>{profile.phone}</p>
      )}

      {editMode ? (
        <button style={styles.button} onClick={handleSave}>Save</button>
      ) : (
        <button style={styles.button} onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  label: {
    display: 'block',
    marginTop: '10px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    marginTop: '15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
