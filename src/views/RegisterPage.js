import React from 'react';
import { useEffect,useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {authApi} from '../redux';

const RegisterPage=()=>{
    
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
          case 'name':
            return setName(value);
          case 'email':
            return setEmail(value);
          case 'password':
            return setPassword(value);
          default:
            return;
        }
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        dispatch(authApi.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
      };
    
    return (
        <div>
      <h1>Register Page</h1>
      
        {!isLoggedIn&&<form autoComplete="off" onSubmit={handleSubmit}>
          <label>Имя </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />

          <label>Почта </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

          <label>Пароль</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

          <button type="submit" />
        </form>}
        {isLoggedIn&&<div>
          <h2>Your account is created!</h2>
          <Link to='/contacts'>Go to Phonebook</Link>
        </div>}
        </div>
        );
};
export default RegisterPage;