import React from "react";
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <h1>Museum <span><Logo className='logo'/>Finder</span></h1>
    </header>
  )
}

export default Header;