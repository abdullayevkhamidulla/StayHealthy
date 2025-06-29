import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import InstantConsultation from './InstantConsultation';
import ReviewForm from './ReviewForm';
import Profile from './Profile';


export default function HomePage() {
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Fake notification for demonstration
    setNotification('Your appointment with Dr. Lee is tomorrow at 10:00 AM');

    // Clear after 5 seconds
    const timer = setTimeout(() => setNotification(''), 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* <Notification message={notification} /> */}
      {/* other components */}
      {/* <InstantConsultation/> */}
      <ReviewForm/>
      <Profile/>
    </div>
  );
}
