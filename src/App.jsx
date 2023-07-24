import React, { useState } from 'react';
import Form from './Form';
import LandingPage from './LandingPage';


const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div >
      
      {!submittedData ? <Form onSubmit={handleFormSubmit} /> : <LandingPage formData={submittedData} />}
    </div>
  );
};

export default App;
