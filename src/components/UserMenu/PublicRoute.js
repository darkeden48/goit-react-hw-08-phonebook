import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

 export default function PublicRoute({ children }) {
    const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  
    return isLoggedIn ? <Navigate to="/contacts" /> : children;
  };