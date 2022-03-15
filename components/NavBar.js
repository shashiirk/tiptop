import { useState } from 'react';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';

import { LogoIcon, WishlistIcon, CartIcon, UserIcon } from '../assets/icons';
import BetterLink from './BetterLink';
import Menu from './Menu';
import { auth } from '../services/firebase-config';

const Div = styled.div`
  /* border-bottom: 1px #374e62 solid; */
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;

  .title {
    /* border: 1px #374e62 solid; */
    margin: 16px 0;
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

  .box {
    /* border: 1px red solid; */
    display: flex;
    align-items: stretch;
    /* position: relative; */

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

        &:first-child {
          margin-right: 8px;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }

    .user-nav {
      border-top: 3px transparent solid;
      border-bottom: 3px transparent solid;
      /* border: 1px red solid; */
      display: flex;
      position: relative;

      button {
        background-color: white;
        border: none;
        padding: 16px;
        /* border: 1px blue solid; */
      }

      &.active {
        border-bottom-color: #4a00e0;
      }
    }
  }

  @media (max-width: 640px) {
    .title {
      a {
        padding: 0;

        .icon {
          width: 38px;
        }

        p {
          font-size: 22px;
        }
      }
    }

    .box {
      .nav-items {
        .nav-item {
          padding: 6px;
        }
      }

      .user-nav {
        button {
          padding: 10px;
        }
      }
    }
  }
`;

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuHandler = () => {
    if (isMenuVisible) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    setIsMenuVisible(true);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        closeMenu();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Div>
      <h1 className="title">
        <BetterLink href="/">
          <LogoIcon />
          <p>tiptop</p>
        </BetterLink>
      </h1>
      <div className="box">
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
        </ul>
        <div className={`user-nav ${isMenuVisible ? 'active' : ''}`}>
          <button onClick={toggleMenuHandler}>
            <UserIcon />
          </button>
          {isMenuVisible && (
            <Menu onClose={closeMenu} onSignOut={signOutHandler} />
          )}
        </div>
      </div>
    </Div>
  );
};

export default NavBar;
