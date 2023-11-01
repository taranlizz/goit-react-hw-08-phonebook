import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrorDiv } from './ContactForm.styled';
import {
  FormEl,
  InputEl,
  LabelEl,
} from 'components/FormStyles/FormStyles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .required('Required!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      '        Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const nameInputID = nanoid();
  const numberInputID = nanoid();

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkIsPresent = contact => {
    const isPresent = savedContact =>
      savedContact.name.toLowerCase() === contact.name.toLowerCase();

    return contacts.some(isPresent);
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(contact, actions) => {
        contact.name = contact.name.trim();
        if (checkIsPresent(contact)) {
          return alert(`${contact.name} is already in contacts.`);
        }
        dispatch(addContact(contact));
        actions.resetForm();
      }}
    >
      <FormEl>
        <LabelEl htmlFor={nameInputID}>Name</LabelEl>
        <InputEl name="name" id={nameInputID}></InputEl>
        <ErrorDiv name="name" component="div" />
        <LabelEl htmlFor={numberInputID}>Number</LabelEl>
        <InputEl name="number" id={numberInputID} type="tel"></InputEl>
        <ErrorDiv name="number" component="div" />
        <Button type="submit" variant="contained" color="secondary">
          Create
        </Button>
      </FormEl>
    </Formik>
  );
};
