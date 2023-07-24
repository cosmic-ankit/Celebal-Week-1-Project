import React from 'react';

const LandingPage = ({ formData }) => {
  return (
    <div>
      <h1>Thank you for your submission!</h1>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Contact Number: {formData.contactNumber}</p>
      <p>Date of Birth: {formData.dob}</p>
      {/* Display other form data here */}
    </div>
  );
};

export default LandingPage;
