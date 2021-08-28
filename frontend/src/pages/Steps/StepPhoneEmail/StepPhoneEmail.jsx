import React from 'react';

const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <h1>Phone or Email component</h1>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepPhoneEmail;
