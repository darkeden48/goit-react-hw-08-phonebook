import HomePage from "views/HomePage";
import LoginPage from "views/LoginPage";
import RegisterPage from "views/RegisterPage";
import PhoneBookPage from "views/PhoneBookPage";
import Container from "./components/Container/Container";
import AppBar from "components/Navigation/AppBar"
import { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {authApi} from './redux';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authApi.fetchCurrentUser());
  }, [dispatch]);
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  return (
   
      <Container>
      <AppBar/>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/contacts" /> : <HomePage/> }/>
        <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> :<RegisterPage/>} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/contacts" /> :<LoginPage/>} />
        <Route path="/contacts" element={isLoggedIn ? <PhoneBookPage/> : <Navigate to="/login" />}/>
      </Routes>
      </Container>
     
  );
}