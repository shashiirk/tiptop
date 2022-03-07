import Image from 'next/image';
import styled from 'styled-components';

import BetterLink from './BetterLink';

const Div = styled.div`
  font-size: 14px;
  border: 1px #eee solid;

  .item {
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
  }

  .cart {
    font: inherit;
    font-weight: 500;
    background-color: white;
    color: #4a00e0;
    display: block;
    outline: none;
    cursor: pointer;
    border: none;
    border-top: 1px #eee solid;
    padding: 8px;
    width: 100%;
  }
`;

const WishlistItemCard = ({ id, imageURL, brand, name, amount }) => {
  return (
    <Div>
      <div className="item">
        <BetterLink href={`/collections/${id}`}>
          <Image src={imageURL} width={220} height={275} layout="responsive" />
        </BetterLink>
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          <div className="amount">{`Rs. ${amount}`}</div>
        </div>
      </div>
      <button className="cart">Move to Cart</button>
    </Div>
  );
};

export default WishlistItemCard;
