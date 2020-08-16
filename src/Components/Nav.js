import React from 'react';

const Nav = (props) => {

  return (
    <nav className='savedNav'>
      <a href='#' onClick={() => props.setSavedIsHidden(props.savedIsHidden ? false : true)}>{props.savedIsHidden ? 'Saved Museums' : 'Close'}</a>
    </nav>
  )
};

export default Nav;