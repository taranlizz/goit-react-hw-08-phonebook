import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Box } from '@mui/material';
import { ContactBar } from 'components/ContactsBar/ContactsBar';
import { PageTitle } from 'components/PageTitle/PageTitle';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Contacts</PageTitle>
      <ContactBar />
      <ContactList />
    </>
  );
};

export default Contacts;
