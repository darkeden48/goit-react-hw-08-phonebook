import HomePage from "views/HomePage";
import LoginPage from "views/LoginPage";
import RegisterPage from "views/RegisterPage";
import PhoneBookPage from "views/PhoneBookPage";
import Container from "./components/Container/Container";
import AppBar from "components/Navigation/AppBar"
import { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {authApi} from './redux';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';

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
        <Route path="/" element={<PublicRoute><HomePage/></PublicRoute> }/>
        <Route path="/register" element={<PublicRoute><RegisterPage/></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><LoginPage/></PublicRoute>} />
        <Route path="/contacts" element={<PrivateRoute><PhoneBookPage/> </PrivateRoute>}/>
      </Routes>
      </Container>
     
  );
}