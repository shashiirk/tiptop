import Link from 'next/link';
import styled from 'styled-components';

import EmptyCart from '../components/EmptyCart';

const MainNav = styled.div`
  /* border: 1px green solid; */
  font-size: 13px;
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

const Cart = () => {
  return (
    <>
      <MainNav>
        <Link href="/">Home</Link> / <span>Cart</span>
      </MainNav>
      <EmptyCart />
    </>
  );
};

export default Cart;
