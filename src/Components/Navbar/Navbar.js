import React from 'react';
import  './Navbar.css'

const Navbar =(props) => {
    const {onRouteChange} = props;
    
        return (
            <nav className="nav">
                <p className='nav-link' onClick={()=>onRouteChange('signout')}>Sign Out </p>
            </nav>
        ) 
     
}

export default Navbar;