import React from 'react';
import { Routes, Route, Navigate, Link, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

 export default function HomePage(){
    return(

    <div>
      <h1>PhoneBook servise</h1>
      <span>SignIn</span>
      <Link to="/register">
        Don't have an account?
      </Link>
  
      <Link to="/login">
      I already have an account.
      </Link>
    </div>
    
    );
};