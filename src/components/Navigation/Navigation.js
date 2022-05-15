import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  
  return (
      <div>
    <nav> 
        <NavLink to="/">
          Home Page
        </NavLink>,
        <NavLink to="/contacts">
          Phonebook
        </NavLink>
    </nav>
    </div>
  );
};

export default Navigation;