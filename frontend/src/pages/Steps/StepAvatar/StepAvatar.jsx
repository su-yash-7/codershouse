import React from 'react';

const StepAvatar = ({ onNext }) => {
  return (
    <div>
      <h1>Avatar</h1>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default StepAvatar;
