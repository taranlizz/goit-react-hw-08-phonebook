import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Button, ErrorDiv, FormEl, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  phone: Yup.string()
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
      initialValues={{ name: '', phone: '' }}
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
        <Label htmlFor={nameInputID}>Name</Label>
        <Input name="name" id={nameInputID}></Input>
        <ErrorDiv name="name" component="div" />
        <Label htmlFor={numberInputID}>Number</Label>
        <Input name="phone" id={numberInputID} type="tel"></Input>
        <ErrorDiv name="phone" component="div" />
        <Button type="submit">Add contact</Button>
      </FormEl>
    </Formik>
  );
};
