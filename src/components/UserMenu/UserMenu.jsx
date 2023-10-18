import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log Out
      </button>
    </div>
  );
};
