const QuantityPicker = ({ currentQuantity, onSetQuantity }) => {
  return (
    <>
      <button
        className={currentQuantity === '1' ? 'active' : ''}
        onClick={() => onSetQuantity('1')}
      >
        1
      </button>
      <button
        className={currentQuantity === '2' ? 'active' : ''}
        onClick={() => onSetQuantity('2')}
      >
        2
      </button>
      <button
        className={currentQuantity === '3' ? 'active' : ''}
        onClick={() => onSetQuantity('3')}
      >
        3
      </button>
      <button
        className={currentQuantity === '4' ? 'active' : ''}
        onClick={() => onSetQuantity('4')}
      >
        4
      </button>
      <button
        className={currentQuantity === '5' ? 'active' : ''}
        onClick={() => onSetQuantity('5')}
      >
        5
      </button>
      <button
        className={currentQuantity === '6' ? 'active' : ''}
        onClick={() => onSetQuantity('6')}
      >
        6
      </button>
      <button
        className={currentQuantity === '7' ? 'active' : ''}
        onClick={() => onSetQuantity('7')}
      >
        7
      </button>
      <button
        className={currentQuantity === '8' ? 'active' : ''}
        onClick={() => onSetQuantity('8')}
      >
        8
      </button>
      <button
        className={currentQuantity === '9' ? 'active' : ''}
        onClick={() => onSetQuantity('9')}
      >
        9
      </button>
      <button
        className={currentQuantity === '10' ? 'active' : ''}
        onClick={() => onSetQuantity('10')}
      >
        10
      </button>
    </>
  );
};

export default QuantityPicker;
