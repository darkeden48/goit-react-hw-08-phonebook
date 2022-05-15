import HomePage from "views/HomePage";
import LoginPage from "views/LoginPage";
import RegisterPage from "views/RegisterPage";
import PhoneBookPage from "views/PhoneBookPage";
import Container from "./components/Container/Container";
import AppBar from "components/Navigation/AppBar"
import { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {

  return (
   
    
      <Container>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/register" element={RegisterPage} />
        <Route path="/login" element={LoginPage} />
        <Route path="/contacts" element={PhoneBookPage} />
      </Routes>
      </Container>
     
  );
}