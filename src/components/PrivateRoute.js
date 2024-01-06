import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/Auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}