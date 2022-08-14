import React from "react";
import PropTypes from "react";
import "./button.scss";

const styles = [
  "btn-primary-solid",
  "btn-warning-solid",
  "btn-danger-solid",
  "btn-success-solid",
  "btn-primary-outline",
  "btn-warning-outline",
  "btn-danger-outline",
  "btn-success-outline",
];

const sizes = ["btn-small", "btn-medium", "btn-large"];

function Button({ buttonText, onClick, buttonStyle, buttonSize }) {
  const setButtonStyles = styles.includes(buttonStyle)
    ? buttonStyle
    : "btn-primary-solid";

  const setButtonSize = sizes.includes(buttonSize) ? buttonSize : "btn-small";
  return (
    <div>
      <button
        onClick={onClick}
        buttonStyle={setButtonStyles}
        buttonSize={setButtonSize}
        className={`btn ${setButtonStyles} ${setButtonSize}`}
      >
        {buttonText}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonSize: PropTypes.object,
  onClick: PropTypes.func,
};

Button.defaultPropTypes = {
  buttonText: "",
  buttonStyle: "",
  buttonSize: "",
};

export default Button;
