import Image from 'next/image';
import styled from 'styled-components';

import BetterLink from './BetterLink';

const Div = styled.div`
  font-size: 14px;
  border: 1px #eee solid;

  a {
    text-decoration: none;
    color: inherit;
  }

  .info {
    padding: 8px;

    .brand {
      font-weight: 500;
    }

    .name {
      /* font-size: 14px; */
      color: #777;
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
