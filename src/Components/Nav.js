import React from 'react';

const Nav = (props) => {

  const handleClick = () => {
    props.setSavedIsHidden(props.savedIsHidden ? false : true);
  };
  
  return (
    <nav className='savedNav'>
      <a href='#savedSection' onClick={handleClick}>{props.savedIsHidden ? 'Saved Museums' : 'Close'}</a>
    </nav>
  )
};

export default Nav;