
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from './AuthNav';
// import { authSelectors } from 'redux/auth';

const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2A363B',
      padding: 10,
    },
  };

export default function AppBar() {
const isLoggedIn = useSelector(state => state.auth.user.name);
return (
  <header style={styles.header}>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>
);
}