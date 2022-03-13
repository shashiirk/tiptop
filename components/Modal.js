import styled from 'styled-components';

import { CloseIcon } from '../assets/icons';

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
  }

  .modal {
    background-color: white;
    color: black;
    padding: 16px;
    margin: auto;
    max-width: 85%;
    border-radius: 10px;
    z-index: 30;

    .close {
      border: 1px transparent solid;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 2px;
      margin-left: auto;
    }
  }
`;

const Modal = ({ closeHandler, children }) => {
  return (
    <Div>
      <div className="backdrop" onClick={closeHandler}></div>
      <div className="modal">
        <button className="close" onClick={closeHandler}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </Div>
  );
};

export default Modal;
