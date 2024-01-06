import { lazy, useEffect } from 'react';
import SharedLayout from './Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/Auth/authOperations';
import authSelectors from '../redux/Auth/authSelectors';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  const isRefreshingUser = useSelector(authSelectors.selectIsRefreshing);

  return (
    !isRefreshingUser && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PublicRoute component={<HomeView />} />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<LoginView />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsView />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    )
  );
};
