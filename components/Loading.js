import styled, { keyframes } from 'styled-components';

import { LogoIcon } from '../assets/icons';

const loading = keyframes`
  0% {
    left: -30%;
  }
  
  50% {
    left: 80%;
  }
  
  100% {
    left: -30%;
  }
`;

const Div = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 24px;

    svg {
      width: 48px;
      height: auto;
    }
  }

  .wrapper {
    width: 144px;
    height: 3px;
    border-radius: 99px;
    background-color: #ddd;
    position: relative;
    overflow-x: hidden;

    .bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background: linear-gradient(to right, #8e2de2, #4a00e0);
      animation: ${loading} 2000ms infinite;
    }
  }
`;

const Loading = () => {
  return (
    <Div>
      <div className="logo">
        <LogoIcon />
      </div>
      <div className="wrapper">
        <div className="bar"></div>
      </div>
    </Div>
  );
};

export default Loading;
