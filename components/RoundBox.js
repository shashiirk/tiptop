import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { filterActions } from '../store/filterSlice';

const Button = styled.button`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: 1px #bbb solid;
  border-radius: 50%;
  background-color: transparent;
  margin-right: 8px;
  cursor: pointer;

  &.checked {
    border-color: #4a00e0;
    border-width: 5px;

    .icon {
      stroke-width: 3;
    }
  }
`;

const RoundBox = ({ of }) => {
  const filters = useSelector((state) => state.filter);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.sort === of) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [filters.sort]);

  const clickHandler = () => {
    dispatch(filterActions.chooseSort(of));
    setIsChecked(true);
  };

  return (
    <Button
      className={isChecked ? 'checked' : ''}
      onClick={clickHandler}
    ></Button>
  );
};

export default RoundBox;
