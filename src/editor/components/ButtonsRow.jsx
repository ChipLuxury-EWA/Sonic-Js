import PropTypes from "prop-types";

const ButtonsRow = ({ runCode }) => {
  return (
    <>
      <button onClick={runCode}>Run Code</button>
    </>
  );
};


ButtonsRow.propTypes = {
    runCode: PropTypes.func
}

export default ButtonsRow;