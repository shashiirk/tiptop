const SizePickerForTops = ({ currentSize, onSetSize }) => {
  return (
    <>
      <button
        className={currentSize === 'S' ? 'active' : ''}
        onClick={() => onSetSize('S')}
      >
        S
      </button>
      <button
        className={currentSize === 'M' ? 'active' : ''}
        onClick={() => onSetSize('M')}
      >
        M
      </button>
      <button
        className={currentSize === 'L' ? 'active' : ''}
        onClick={() => onSetSize('L')}
      >
        L
      </button>
      <button
        className={currentSize === 'XL' ? 'active' : ''}
        onClick={() => onSetSize('XL')}
      >
        XL
      </button>
    </>
  );
};

export default SizePickerForTops;
