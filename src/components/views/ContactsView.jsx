import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/Contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/Contacts/selectors';

export default function ContactsView() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <Loader />}
      {error && (
        <p className="info-text">
          Sorry, something went wrong. Please try to reload this page.
        </p>
      )}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {visibleContacts.length > 0 && !error ? (
        <ContactList />
      ) : (
        <p className="info-text">Your phonebook is empty.</p>
      )}
    </div>
  );
}