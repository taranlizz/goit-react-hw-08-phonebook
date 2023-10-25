import { AuthHeading } from 'components/AuthHeading/AuthHeading';
import { AuthWrapper } from 'components/AuthWrapper/AuthWrapper.styled';
import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <CenterWrapper>
      <AuthWrapper>
        <AuthHeading>Login to your account</AuthHeading>
        <LoginForm />
      </AuthWrapper>
    </CenterWrapper>
  );
};

export default Login;
