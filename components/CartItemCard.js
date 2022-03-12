import Image from 'next/image';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';

import BetterLink from './BetterLink';
import { CloseIcon } from '../assets/icons';
import { db } from '../services/firebase-config';

const Div = styled.div`
  font-size: 14px;
  border: 1px #eee solid;
  width: 420px;
  margin-bottom: 16px;

  .item {
    display: flex;
    align-items: center;
    position: relative;

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

    .delete {
      border: none;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 10;
      background-color: white;
      cursor: pointer;

      .icon {
        width: 16px;
        height: 16px;
        stroke-width: 2px;
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

const CartItemCard = ({ id, size, imageURL, brand, name, amount }) => {
  const user = useSelector((state) => state.auth.user);

  const removeItemHandler = () => {
    updateDoc(doc(db, user.uid, 'cart'), {
      items: arrayRemove({ itemId: id, itemSize: size }),
    }).catch((error) => console.log(error));
  };

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
        <button className="delete" onClick={removeItemHandler}>
          <CloseIcon />
        </button>
      </div>
    </Div>
  );
};

export default CartItemCard;
