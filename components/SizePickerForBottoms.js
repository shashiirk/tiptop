const SizePickerForBottoms = ({ currentSize, onSetSize }) => {
  return (
    <>
      <button
        className={currentSize === '31' ? 'active' : ''}
        onClick={() => onSetSize('31')}
      >
        31
      </button>
      <button
        className={currentSize === '32' ? 'active' : ''}
        onClick={() => onSetSize('32')}
      >
        32
      </button>
      <button
        className={currentSize === '33' ? 'active' : ''}
        onClick={() => onSetSize('33')}
      >
        33
      </button>
      <button
        className={currentSize === '34' ? 'active' : ''}
        onClick={() => onSetSize('34')}
      >
        34
      </button>
    </>
  );
};

export default SizePickerForBottoms;
