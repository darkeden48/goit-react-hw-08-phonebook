import React from 'react';
import { useEffect,useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const RegisterPage=()=>{
    
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        // dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
      };
    
    return (
        <div>
      <h1>Register Page</h1>
      
        <form autoComplete="off" onSubmit={handleSubmit}>
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
        </form>
        </div>
        );
};
export default RegisterPage;