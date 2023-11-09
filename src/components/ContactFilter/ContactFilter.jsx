import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/slice';
import { TextField, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const ContactFilter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  return (
    <>
      <Button variant="contained" color="secondary">
        <FilterListIcon sx={{ marginRight: '7px' }} />
        Filter
      </Button>
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
