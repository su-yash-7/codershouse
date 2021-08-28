import React from 'react';

const StepName = ({ onNext }) => {
  return (
    <div>
      <h1>Name</h1>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default StepName;
