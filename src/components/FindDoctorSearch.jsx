import React, { useState } from 'react';

const doctors = [
  { id: 1, name: 'Dr. Smith', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Lee', specialty: 'Dentistry' },
  { id: 3, name: 'Dr. Ahmed', specialty: 'Pediatrics' },
];

export default function FindDoctorSearch() {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === '') {
      setFiltered([]);
    } else {
      const results = doctors.filter((doc) =>
        doc.specialty.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Find a Doctor</h2>
      <input
        type="text"
        placeholder="Search by specialty"
        value={search}
        onChange={handleSearch}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filtered.map((doc) => (
          <li
            key={doc.id}
            style={{
              backgroundColor: '#f9f9f9',
              padding: '10px',
              marginBottom: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '15px',
            }}
          >
            <strong>{doc.name}</strong> — {doc.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}
