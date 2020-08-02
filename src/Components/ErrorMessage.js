import React from 'react';

const Modal = () => {

  // on click of the "Close window" button
  // handleClick = () => {
    // hide the error message
    // document.querySelector('.errorMessage')
    // .style.display = 'none';
    // update hasError state to false
    // this.props.updateErrorState(false);
  // }

  return (
    <div className='errorMessage'>
      <p>Something went wrong.</p>
      <p>Please try again.</p>
      <button type='button' onClick={this.handleClick}>Close window</button>
    </div>
  );
}

export default ErrorMessage;