import React from 'react';

const StepUsername = ({ onNext }) => {
  return (
    <div>
      <h1>UserName</h1>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default StepUsername;
