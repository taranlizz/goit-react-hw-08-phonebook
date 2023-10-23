import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavLinkStyled, NavStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </NavStyled>
  );
};
