import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const buttonStyle = {
  primary: styles.primary,
  edit: styles.edit,
  delete: styles.delete,
  close: styles.close,
};

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={cn(styles.button, buttonStyle[type])}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'edit', 'delete', 'close']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
