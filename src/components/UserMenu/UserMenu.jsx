import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';
import { Greeting, Wrapper } from './UserMenu.styled';
import { ButtonContained } from 'components/Button/Button';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Greeting>Hello, {name}!</Greeting>
      <ButtonContained type="button" onClick={() => dispatch(logout())}>
        Log Out
      </ButtonContained>
    </Wrapper>
  );
};
