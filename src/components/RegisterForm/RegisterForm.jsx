import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { FormEl, InputEl, LabelEl } from 'components/Form/FormStyle.styled';
import { register } from 'redux/auth/operations';
import { Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameInputID = nanoid();
  const emailInputID = nanoid();
  const passwordInputID = nanoid();

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(credentials, actions) => {
          dispatch(register(credentials));
          actions.resetForm();
        }}
      >
        <FormEl>
          <LabelEl htmlFor={nameInputID}>Name</LabelEl>
          <InputEl
            type="text"
            name="name"
            id={nameInputID}
            placeholder="Please enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <LabelEl htmlFor={emailInputID}>Email</LabelEl>
          <InputEl
            type="email"
            name="email"
            id={emailInputID}
            placeholder="Enter your email"
            required
          />
          <LabelEl htmlFor={passwordInputID}>Password</LabelEl>
          <InputEl
            type="password"
            name="password"
            id={passwordInputID}
            placeholder="Enter password"
            required
            minLength="6"
          />
          <Button type="submit" variant="contained" color="secondary">
            Sign Up
          </Button>
        </FormEl>
      </Formik>
    </>
  );
};
