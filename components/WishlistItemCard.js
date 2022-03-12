import Image from 'next/image';
import styled from 'styled-components';
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';

import { CloseIcon } from '../assets/icons';
import BetterLink from './BetterLink';
import { useSelector } from 'react-redux';
import { db } from '../services/firebase-config';

const Div = styled.div`
  font-size: 14px;
  border: 1px #eee solid;

  .item {
    position: relative;

    .delete {
      border: 1px #ddd solid;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 10;
      background-color: #f4f4f4;
      color: #888;
      cursor: pointer;

      .icon {
        width: 16px;
        height: 16px;
        stroke-width: 2.5px;
      }
    }

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

const WishlistItemCard = ({ id, size, imageURL, brand, name, amount }) => {
  const user = useSelector((state) => state.auth.user);

  const removeItemHandler = () => {
    updateDoc(doc(db, user.uid, 'wishlist'), {
      items: arrayRemove({ itemId: id, itemSize: size }),
    }).catch((error) => console.log(error));
  };

  return (
    <Div>
      <div className="item">
        <button className="delete" onClick={removeItemHandler}>
          <CloseIcon />
        </button>
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
