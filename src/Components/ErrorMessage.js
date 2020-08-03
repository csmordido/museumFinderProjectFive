import React from 'react';

const ErrorMessage = (props) => {

  // on click of the "Close window" button
  const handleClick = () => {

    // hide the error message
    props.setHasError(false);
    
  }

  return (
    <div className='errorMessage'>
      <p>Something went wrong.</p>
      <p>Please try again.</p>
      <button type='button' onClick={handleClick}>Close window</button>
    </div>
  );
}

export default ErrorMessage;