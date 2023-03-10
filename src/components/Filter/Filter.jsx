import { useSelector, useDispatch } from 'react-redux';

import { getFilter, setFilter } from 'redux/filter/slice';

import { Filtration } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Filtration>
      <label>
        Find contacts by name
        <input
          value={filter}
          onChange={handleFilter}
          type="text"
          name="filter"
        />
      </label>
    </Filtration>
  );
};

export default Filter;
