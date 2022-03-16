import styled from 'styled-components';
import Link from 'next/link';

import { CheckIcon } from '../assets/icons';

const Div = styled.div`
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
    width: 82px;
    height: 82px;

    .icon {
      border: 3px #4a00e0 solid;
      border-radius: 50%;
      padding: 8px;
      width: 64px;
      height: 64px;
      stroke-width: 1.5px;
      color: #4a00e0;
    }
  }

  .title {
    margin-top: 24px;
    font-size: 24px;
    font-weight: 500;
  }

  .text {
    margin-top: 24px;
  }

  a {
    display: block;
    margin-top: 30px;
    padding: 14px 42px;
    text-decoration: none;
    background: #8e2de2;
    background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const OrderPlaced = () => {
  return (
    <Div>
      <div className="round">
        <CheckIcon />
      </div>
      <h2 className="title">Order placed successfully</h2>
      <p className="text">Thank you for shopping with us</p>
      <Link href="/collections">Continue Shopping</Link>
    </Div>
  );
};

export default OrderPlaced;
