import { ButtonOutlined, ButtonContained } from 'components/Button/Button';
import { Link } from 'react-router-dom';
import { AuthWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrapper>
      <ButtonOutlined pathTo="/login" component={Link}>
        Sign In
      </ButtonOutlined>
      <ButtonContained pathTo="/register" component={Link}>
        Sign Up
      </ButtonContained>
    </AuthWrapper>
  );
};
