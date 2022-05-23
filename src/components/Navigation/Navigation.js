import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  return (
      <div>
    <nav> 
    {!isLoggedIn&&<NavLink to="/">
          Home Page
        </NavLink>}
        {isLoggedIn&&<NavLink to="/contacts">
          Phonebook
        </NavLink>}
    </nav>
    </div>
  );
};

export default Navigation;