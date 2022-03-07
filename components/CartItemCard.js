import Image from 'next/image';
import styled from 'styled-components';

import BetterLink from './BetterLink';

const Div = styled.div`
  font-size: 14px;
  border: 1px #eee solid;
  width: 420px;
  margin-bottom: 16px;

  .item {
    display: flex;
    align-items: center;

    a {
      /* border: 1px green solid; */
      text-decoration: none;
      color: inherit;
      display: block;
      width: 110px;
    }

    .info {
      padding: 8px;

      .brand {
        font-weight: 500;
      }

      .name {
        /* font-size: 14px; */
        color: #777;
        margin-top: 8px;
      }

      .actions {
        margin: 16px 0;

        button {
          font: inherit;
          font-size: 13px;
          font-weight: 500;
          padding: 2px 8px;
          border: none;
          border-radius: 4px;
          outline: none;

          &:first-child {
            margin-right: 8px;
          }
        }
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

const CartItemCard = ({ id, imageURL, brand, name, amount }) => {
  return (
    <Div>
      <div className="item">
        <BetterLink href={`/collections/${id}`}>
          <Image src={imageURL} width={110} height={138} layout="responsive" />
        </BetterLink>
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          <div className="actions">
            <button>Size</button>
            <button>Quantity</button>
          </div>
          <div className="amount">{`Rs. ${amount}`}</div>
        </div>
      </div>
    </Div>
  );
};

export default CartItemCard;
