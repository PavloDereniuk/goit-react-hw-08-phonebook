import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/Auth/authSelectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}