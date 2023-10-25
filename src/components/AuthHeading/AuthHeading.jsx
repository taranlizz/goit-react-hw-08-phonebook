import { Greeting, Heading, Wrapper } from './AuthHeading.styled';

export const AuthHeading = ({ children }) => {
  return (
    <Wrapper>
      <Greeting>Welcome! 👋</Greeting>
      <Heading>{children}</Heading>
    </Wrapper>
  );
};
