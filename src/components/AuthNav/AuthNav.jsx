import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Sign Up</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </div>
  );
};
