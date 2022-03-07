import Link from 'next/link';
import styled from 'styled-components';

import EmptyCart from '../components/EmptyCart';
import CartItemCard from '../components/CartItemCard';

const MainNav = styled.div`
  /* border: 1px green solid; */
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

const CLOTHES = [
  {
    id: '2430',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Shirt_5.jpg?alt=media',
    brand: 'Hollister',
    category: 'Shirt',
    name: 'White Pattern Shirt',
    amount: '1455',
  },
  {
    id: '2431',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/tiptop-store.appspot.com/o/Hollister_Hoodie_1.jpg?alt=media',
    brand: 'Hollister',
    category: 'Hoodie',
    name: 'Gray Colorblock Hoodie',
    amount: '2400',
  },
];

const Div = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;

  .cart {
    /* border: 1px blue solid; */
    padding: 16px;
  }

  .checkout {
    /* border: 1px blue solid; */
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
        display: block;
        width: 100%;
        outline: none;
        cursor: pointer;
        padding: 14px 28px;
        margin-top: 32px;
        border: none;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.24);
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
`;

const Cart = () => {
  return (
    <>
      <MainNav>
        <Link href="/">Home</Link> / <span>Cart</span>
      </MainNav>
      <Div>
        <div className="cart">
          <div className="title">
            Cart <span>({CLOTHES.length} items)</span>
          </div>
          <div className="clothes">
            {CLOTHES.map((item) => (
              <CartItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="checkout">
          <div className="title">Price details</div>
          <div className="basic">
            <div className="price">
              <div className="title">Price</div>
              <div className="amount">Rs 3550</div>
            </div>
            <div className="discount">
              <div className="title">Discount</div>
              <div className="amount">- Rs 450</div>
            </div>
            <div className="shipping">
              <div className="title">Shipping</div>
              <div className="amount">FREE</div>
            </div>
          </div>
          <div className="total">
            <div className="final">
              <div className="title">Total Amount</div>
              <div className="amount">Rs. 3250</div>
            </div>
            <button className="order">Place Order</button>
          </div>
        </div>
      </Div>
    </>
  );
};

export default Cart;
