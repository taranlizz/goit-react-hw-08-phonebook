import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { FormEl, InputEl, LabelEl } from './LoginForm.styled';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const emailInputID = nanoid();
  const passwordInputID = nanoid();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(credentials, actions) => {
        dispatch(login(credentials));
        actions.resetForm();
      }}
    >
      <FormEl>
        <LabelEl htmlFor={emailInputID}>Email</LabelEl>
        <InputEl
          type="email"
          name="email"
          id={emailInputID}
          placeholder="Please enter your email"
        />
        <LabelEl htmlFor={passwordInputID}>Password </LabelEl>
        <InputEl
          type="password"
          name="password"
          id={passwordInputID}
          placeholder="Enter password"
        />
        <Button type="submit" variant="contained" color="secondary">
          Sign In
        </Button>
      </FormEl>
    </Formik>
  );
};
