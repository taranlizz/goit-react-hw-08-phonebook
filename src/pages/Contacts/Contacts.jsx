import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Wrapper, Title, SubTitle } from './Contacts.styled';
import { ContactModal } from 'components/ContactModal/ContactModal';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Create contact</Title>
      <ContactModal />
      <SubTitle>Contacts</SubTitle>
      <ContactFilter />
      <ContactList />
    </Wrapper>
  );
};

export default Contacts;
