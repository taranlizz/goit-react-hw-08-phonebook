import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(credentials, actions) => {
          dispatch(register(credentials));
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </>
  );
};
