import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const { onRouteChange, isSignedin } = props;
  if (isSignedin)
    return (
      <nav className='nav nav.link'>
        <p onClick={() => onRouteChange('signin')}>SignOut</p>
      </nav>
    );
  return <div>Bookmark Keeper!</div>;
};

export default Navbar;
