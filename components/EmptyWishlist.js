import styled from 'styled-components';

import { WishlistIcon } from '../assets/icons';

const Div = styled.div`
  /* background-color: #f6f6f6; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  .round {
    border: 1px #eee solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    .icon {
      margin: 24px 24px;
      width: 32px;
      height: 32px;

      path {
        stroke-width: 1px;
      }
    }
  }

  .text {
    margin-top: 24px;
  }
`;

const EmptyWishlist = () => {
  return (
    <Div>
      <div className="round">
        <WishlistIcon />
      </div>
      <p className="text">Your wishlist is empty</p>
    </Div>
  );
};

export default EmptyWishlist;
