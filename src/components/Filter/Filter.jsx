import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from '../../redux/Contacts/filterSlice';
import { Wrapper, Text, Field } from './Filter.styled';
import { selectFilter } from '../../redux/Contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Wrapper>
      <Text>Find contacts by name</Text>
      <Field
        type="text"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </Wrapper>
  );
};