import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const ModalButton = ({ disabled, text, onClick }) => {
  return (
    <button
      className={cn(styles.button, disabled && styles.active)}
      type="button"
      onClick={disabled ? onClick : null}
    >
      {text}
    </button>
  );
};

ModalButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalButton;
