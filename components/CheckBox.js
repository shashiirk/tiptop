import { useState } from 'react';
import styled from 'styled-components';

import { CheckIcon } from '../assets/icons';

const Button = styled.button`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: 1px #bbb solid;
  border-radius: 4px;
  background-color: transparent;
  margin-right: 8px;
  cursor: pointer;

  &.checked {
    border-color: #4a00e0;
    background-color: #4a00e0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      stroke-width: 3;
    }
  }
`;

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = () => {
    setIsChecked((prevValue) => !prevValue);
  };

  return isChecked ? (
    <Button className="checked" onClick={clickHandler}>
      <CheckIcon />
    </Button>
  ) : (
    <Button onClick={clickHandler}></Button>
  );
};

export default CheckBox;
