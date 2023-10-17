import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(credentials, actions) => {
        dispatch(login(credentials));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Email <Field type="email" name="email" />
        </label>
        <label>
          Password <Field type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </Form>
    </Formik>
  );
};
