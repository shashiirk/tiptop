import Link from 'next/link';
import styled from 'styled-components';

import { WishlistIcon, CartIcon, UserIcon } from '../assets/icons';
import BetterLink from './BetterLink';

const Div = styled.div`
  /* border-bottom: 1px #374e62 solid; */
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 16px;

  .title {
    a {
      display: block;
      font-family: 'Dancing Script', cursive;
      font-size: 48px;
      font-weight: 700;
      text-decoration: none;
      color: inherit;
    }
  }

  .nav-items {
    /* border: 1px green solid; */
    list-style-type: none;
    color: inherit;
    display: flex;
    align-items: center;

    .nav-item {
      /* border: 1px blue solid; */
      display: flex;
      align-items: center;
      padding: 8px;
      margin-right: 8px;

      a {
        text-decoration: none;
        color: inherit;
      }

      &:last-child {
        height: 100%;
        margin-right: 0;
      }
    }
  }
`;

const NavBar = () => {
  return (
    <Div>
      <h1 className="title">
        <Link href="/">tiptop</Link>
      </h1>
      <ul className="nav-items">
        <li className="nav-item">
          <BetterLink href="/wishlist">
            <WishlistIcon />
          </BetterLink>
        </li>
        <li className="nav-item">
          <BetterLink href="/cart">
            <CartIcon />
          </BetterLink>
        </li>
        <li className="nav-item">
          <UserIcon />
        </li>
      </ul>
    </Div>
  );
};

export default NavBar;
