import Link from 'next/link';
import styled from 'styled-components';

import { LogoIcon, WishlistIcon, CartIcon, UserIcon } from '../assets/icons';
import BetterLink from './BetterLink';

const Div = styled.div`
  /* border-bottom: 1px #374e62 solid; */
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 16px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
      text-decoration: none;
      color: inherit;

      .icon {
        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
      }

      p {
        font-size: 24px;
        font-weight: 500;
        margin-left: 8px;
      }
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
      color: #999;
      display: flex;
      align-items: center;
      padding: 8px;
      margin-right: 8px;

      a {
        text-decoration: none;
        color: inherit;

        @media (hover: hover) {
          transition: color 240ms;

          &:hover {
            color: #4a00e0;
          }
        }
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
        <BetterLink href="/">
          <LogoIcon />
          <p>tiptop</p>
        </BetterLink>
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
