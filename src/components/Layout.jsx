import { Suspense } from 'react';
import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';

export default function SharedLayout() {
  return (
    <div>
      <AppBar />
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}