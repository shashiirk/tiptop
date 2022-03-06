import Image from 'next/image';
import styled from 'styled-components';

import BetterLink from './BetterLink';

const Div = styled.div`
  font-size: 13px;
  /* border: 1px #eee solid; */
  /* border-radius: 12px; */
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.05); */
  /* position: relative; */

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    border-radius: 8px;
  }

  .info {
    padding: 8px;

    .brand {
      font-weight: 500;
    }

    .name {
      /* font-size: 14px; */
      margin: 8px 0;
    }

    .amount {
      font-weight: 500;
    }
  }
`;

const ItemCard = ({ id, imageURL, brand, name, amount }) => {
  return (
    <Div>
      <BetterLink href={`/collections/${id}`}>
        <Image src={imageURL} width={220} height={275} layout="responsive" />
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          <div className="amount">{`Rs. ${amount}`}</div>
        </div>
      </BetterLink>
    </Div>
  );
};

export default ItemCard;
