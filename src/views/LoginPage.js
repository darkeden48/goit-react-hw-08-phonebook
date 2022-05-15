import React from 'react';
import { useEffect,useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage=()=>{

const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = ({ target: { name, value } }) => {
  switch (name) {
    case 'email':
      return setEmail(value);
    case 'password':
      return setPassword(value);
    default:
      return;
  }
};

const handleSubmit = () => {
//   dispatch(authOperations.logIn({ email, password }));
  setEmail('');
  setPassword('');
};
return(
    <div>
    <h1>LogIn Page</h1>
    <form autoComplete="off" onSubmit={handleSubmit}>
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
export default LoginPage;