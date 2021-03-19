import React from 'react';
import scrollToElement from './ScrollToElement';

const Nav = (props) => {

  const handleClick = () => {
    props.setSavedIsHidden(props.savedIsHidden ? false : true);

    setTimeout(() => {
      scrollToElement(props.forwardedRef.current);
    }, 500);
  };
  
  return (
    <nav className='savedNav'>
      <button type='button' onClick={handleClick}>{props.savedIsHidden ? 'Saved Museums' : 'Close'}</button>
    </nav>
  )
};

export default Nav;