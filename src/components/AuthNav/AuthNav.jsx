import { SignUpButton, SignInButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <SignInButton pathTo="/login" variant="outlined" color="secondary">
        Sign In
      </SignInButton>
      <SignUpButton pathTo="/register">Sign Up</SignUpButton>
    </div>
  );
};
