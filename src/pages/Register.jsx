import { AuthHeading } from 'components/AuthHeading/AuthHeading';
import { CenterWrapper } from 'components/CenterWrapper/CenterWrapper';
import { FormWrapper } from 'components/FormStyle/FormStyle.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <CenterWrapper>
      <FormWrapper>
        <AuthHeading>Create new account</AuthHeading>
        <RegisterForm />
      </FormWrapper>
    </CenterWrapper>
  );
};

export default Register;
