import Link from 'next/link';
import styled from 'styled-components';

import { LogoIcon } from '../assets/icons';

const Div = styled.div`
  /* background-color: #f6f6f6; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  .box {
    border: 1px #eee solid;
    max-width: 500px;
    width: 100%;
    background-color: white;
    padding: 32px;
    margin: auto;
    border-radius: 12px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

    .title {
      margin-top: 16px;
      text-align: center;

      .icon {
        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
      }
    }

    .form {
      margin-top: 32px;

      input {
        display: block;
        font: inherit;
        color: inherit;
        width: 100%;
        padding: 13px 16px;
        margin-bottom: 20px;
        outline: none;
        border: 1px #ddd solid;
        border-radius: 12px;

        &::placeholder {
          color: #bbb;
        }
      }

      button {
        font: inherit;
        background: #8e2de2;
        background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
        background: linear-gradient(to right, #8e2de2, #4a00e0);
        color: white;
        font-weight: 500;
        display: block;
        width: 100%;
        outline: none;
        cursor: pointer;
        padding: 14px 28px;
        border: none;
        border-radius: 12px;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.24);
      }
    }

    .info {
      margin-top: 32px;
      margin-bottom: 16px;
      text-align: center;
      font-size: 14px;

      a {
        text-decoration: none;
        color: #4a00e0;
      }
    }
  }
`;

const SignUp = () => {
  return (
    <Div>
      <div className="box">
        <div className="title">
          <LogoIcon />
        </div>
        <form className="form">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="info">
          Do you have an account? <Link href="/signin">Sign In</Link>
        </p>
      </div>
    </Div>
  );
};

export default SignUp;
