import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import uniqid from 'uniqid';

import EmptyCart from '../components/EmptyCart';
import CartItemCard from '../components/CartItemCard';
import SignInPromptTemplate from '../components/SignInPromptTemplate';
import getItemById from '../utils/getItemById';
import OrderPlaced from '../components/OrderPlaced';
import { db } from '../services/firebase-config';

const MainNav = styled.div`
  font-size: 14px;
  background-color: #f4f4f4;
  padding: 16px;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
    color: #999;
  }
`;

const rotation = keyframes`
  from {
        transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }    
`;

const Div = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;

  .cart {
    padding: 16px;
  }

  .checkout {
    padding: 16px;
    font-size: 14px;
    width: 280px;

    .basic {
      .title {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 0;
      }

      > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
      }
    }

    .total {
      border-top: 1px #eee solid;
      font-weight: 500;

      .title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 0;
      }

      > div {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        font-size: 16px;
      }

      .order {
        font: inherit;
        border-radius: 10px;
        background: #8e2de2;
        background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
        background: linear-gradient(to right, #8e2de2, #4a00e0);
        color: white;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 48px;
        outline: none;
        cursor: pointer;
        padding: 14px 28px;
        margin-top: 32px;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        .loader {
          width: 18px;
          height: 18px;
          border: 2px solid #fff;
          border-bottom-color: transparent;
          border-radius: 50%;
          display: block;
          animation: ${rotation} 1s linear infinite;
        }
      }
    }
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;

    span {
      font-size: 16px;
      font-weight: 400;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    .cart {
      padding: 0;
    }

    .checkout {
      margin-top: 16px;
      padding: 0;
      width: 100%;
    }
  }
`;

const Cart = () => {
  const [clothes, setClothes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const items = cartItems.map((item) => {
      const itemDetails = getItemById(item.itemId);
      return {
        size: item.itemSize,
        quantity: item.itemQuantity,
        ...itemDetails,
      };
    });

    setClothes(() => {
      setIsLoading(false);
      return items;
    });
  }, [cartItems]);

  const priceValue = clothes.reduce(
    (prev, cur) => prev + +cur.amount * +cur.quantity,
    0
  );
  const discountValue = Math.floor(priceValue / 5);
  const totalValue = priceValue - discountValue;

  const placeOrderHandler = () => {
    setIsPlacingOrder(true);
    addDoc(collection(db, 'orders'), {
      items: cartItems,
      totalPrice: totalValue,
    }).then(() => {
      setIsOrderPlaced(true);

      updateDoc(doc(db, user.uid, 'cart'), {
        items: [],
      }).then(() => {
        console.log('cart.js // 190');
        setIsPlacingOrder(false);
      });
    });
  };

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <MainNav>
        <Link href="/">Home</Link> / <span>Cart</span>
      </MainNav>
      {isOrderPlaced ? (
        <OrderPlaced />
      ) : (
        !isLoading &&
        (user ? (
          clothes.length > 0 ? (
            <Div>
              <div className="cart">
                <div className="title">
                  Cart <span>({clothes.length} items)</span>
                </div>
                <div className="clothes">
                  {clothes.map((item, index) => (
                    <CartItemCard key={uniqid()} index={index} {...item} />
                  ))}
                </div>
              </div>
              <div className="checkout">
                <div className="title">Price details</div>
                <div className="basic">
                  <div className="price">
                    <div className="title">Price</div>
                    <div className="amount">Rs. {priceValue}</div>
                  </div>
                  <div className="discount">
                    <div className="title">Discount</div>
                    <div className="amount">- Rs. {discountValue}</div>
                  </div>
                  <div className="shipping">
                    <div className="title">Shipping</div>
                    <div className="amount">FREE</div>
                  </div>
                </div>
                <div className="total">
                  <div className="final">
                    <div className="title">Total Amount</div>
                    <div className="amount">Rs. {totalValue}</div>
                  </div>
                  <button
                    className="order"
                    onClick={placeOrderHandler}
                    disabled={isPlacingOrder}
                  >
                    {isPlacingOrder ? (
                      <span className="loader"></span>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                </div>
              </div>
            </Div>
          ) : (
            <EmptyCart />
          )
        ) : (
          <SignInPromptTemplate type="cart" />
        ))
      )}
    </>
  );
};

export default Cart;
