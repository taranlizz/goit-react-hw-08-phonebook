import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/slice';
import { TextField } from '@mui/material';

export const ContactFilter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        color="secondary"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
        size="small"
      />
    </>
  );
};
