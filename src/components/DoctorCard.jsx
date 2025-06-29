import React from 'react';

export default function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <h3>{doctor.name}</h3>
      <p>{doctor.speciality}</p>
      <p>{doctor.experience} years experience</p>
      <p>⭐ {doctor.rating}</p>
    </div>
  );
}
