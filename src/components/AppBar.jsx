import { useSelector } from 'react-redux';
import AuthNav from './AuthNav/AuthNav';
import Nav from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import authSelectors from '../redux/Auth/authSelectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <header>
      <Nav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}