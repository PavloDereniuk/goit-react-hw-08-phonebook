import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcContacts } from 'react-icons/fc';
import authSelectors from '../../redux/Auth/authSelectors';

export default function Nav() {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <div className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      {isLoggedIn && (
        <div className="icon-wrapper">
          <FcContacts className="icon" />
          <Link to="/contacts" className="nav-link">
            Phonebook
          </Link>
        </div>
      )}
    </div>
  );
}