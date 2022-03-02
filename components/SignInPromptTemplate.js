import Link from 'next/link';
import styled from 'styled-components';

import { UserIcon } from '../assets/icons';

const Div = styled.div`
  background-color: #f6f6f6;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .round {
    border: 1px #374e62 dashed;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

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
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    font-weight: 500;
  }

  .text {
    margin-top: 24px;
    font-size: 13px;
  }

  a {
    display: block;
    margin-top: 30px;
    padding: 13px 39px;
    text-decoration: none;
    color: inherit;
    font-size: 13px;
    font-weight: 500;
    border: 1px #374e62 solid;
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
