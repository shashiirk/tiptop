import styled from 'styled-components';

import CheckBox from './CheckBox';

const Div = styled.div`
  margin-top: 32px;

  .heading {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }

  .item {
    /* border: 1px red solid; */
    display: flex;
    align-items: flex-start;
    margin: 8px 0;

    .text {
      margin: 0;
      padding: 0;
      font-size: 13px;
    }
  }
`;

const CATEGORIES = ['Hoodies', 'Jeans', 'Polos', 'Shirts'];

const CategoryFilter = () => {
  return (
    <Div>
      <div className="heading">Category</div>
      {CATEGORIES.map((value, index) => (
        <div className="item" key={index}>
          <CheckBox />
          <span className="text">{value}</span>
        </div>
      ))}
    </Div>
  );
};

export default CategoryFilter;
