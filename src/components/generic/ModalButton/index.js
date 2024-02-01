import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const ModalButton = ({ isActive, text, onClick }) => {
  return (
    <button
      className={cn(styles.button, isActive && styles.active)}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

ModalButton.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ModalButton;
