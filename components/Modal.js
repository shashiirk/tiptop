import styled from 'styled-components';

import { CloseIcon } from '../assets/icons';

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal {
    background-color: white;
    color: black;
    padding: 16px;
    margin: auto;
    max-width: 85%;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    z-index: 30;

    button {
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
        <button onClick={closeHandler}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </Div>
  );
};

export default Modal;
