import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div className="auth-nav">
      <Link to="/register" className="nav-link">
        Register
      </Link>
      <Link to="/login" className="nav-link">
        Log in
      </Link>
    </div>
  );
}