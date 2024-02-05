import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const buttonType = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const ModalButton = ({ disabled, type, text, onClick }) => {
  return (
    <button
      className={cn(
        styles.button,
        buttonType[type],
        disabled && styles.disabled
      )}
      type="button"
      onClick={!disabled ? onClick : null}
    >
      {text}
    </button>
  );
};

ModalButton.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalButton;
