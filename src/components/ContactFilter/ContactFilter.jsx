import { Input, Label } from './ContactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/slice';

export const ContactFilter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
        value={filter}
      />
    </Label>
  );
};
