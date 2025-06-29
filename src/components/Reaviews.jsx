import React, { useState } from 'react';

 function Reviews() {
  const [reviews] = useState([
    { id: 1, doctor: 'Dr. Smith', review: 'Very kind and professional.' },
    { id: 2, doctor: 'Dr. Alice', review: 'Helpful advice!' }
  ]);

  return (
    <div>
      <h2>Your Consultations</h2>
      {reviews.map((r) => (
        <div key={r.id}>
          <strong>{r.doctor}</strong>: {r.review}
        </div>
      ))}
    </div>
  );
}
export default Reviews