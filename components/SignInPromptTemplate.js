import Link from 'next/link';
import styled from 'styled-components';

import { UserIcon } from '../assets/icons';

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

    .icon {
      margin: 24px 24px;
      width: 32px;
      height: 32px;

      path,
      circle {
        stroke-width: 1px;
      }
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
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.24);
  }
`;

const SignInPromptTemplate = ({ type }) => {
  return (
    <Div>
      <div className="round">
        <UserIcon />
      </div>
      <h2 className="title">Please Sign In</h2>
      <p className="text">Sign In to view items in your {type}</p>
      <Link href="/signin">Sign In</Link>
    </Div>
  );
};

export default SignInPromptTemplate;
