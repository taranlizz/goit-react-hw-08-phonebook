import { AuthHeading } from 'components/AuthHeading/AuthHeading';
import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { FormWrapper } from 'components/Form/FormStyle.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <CenterWrapper>
      <FormWrapper>
        <AuthHeading>Login to your account</AuthHeading>
        <LoginForm />
      </FormWrapper>
    </CenterWrapper>
  );
};

export default Login;
