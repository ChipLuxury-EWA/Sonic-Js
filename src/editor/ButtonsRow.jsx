import PropTypes from "prop-types";

const ButtonsRow = ({ runCode, changeFontSize }) => {
  return (
    <>
      <button onClick={runCode}>Run Code</button>
      <button onClick={() => changeFontSize("-")}>-</button>
      <button onClick={() => changeFontSize("+")}>+</button>
    </>
  );
};

ButtonsRow.propTypes = {
  runCode: PropTypes.func,
  changeFontSize: PropTypes.func,
};

export default ButtonsRow;
