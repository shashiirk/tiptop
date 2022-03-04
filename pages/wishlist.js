import styled from 'styled-components';
import Link from 'next/link';

import EmptyWishlist from '../components/EmptyWishlist';
import SignInPromptTemplate from '../components/SignInPromptTemplate';

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

const Wishlist = () => {
  return (
    <>
      <MainNav>
        <Link href="/">Home</Link> / <span>Wishlist</span>
      </MainNav>
      <SignInPromptTemplate type={'wishlist'} />
    </>
  );
};

export default Wishlist;
