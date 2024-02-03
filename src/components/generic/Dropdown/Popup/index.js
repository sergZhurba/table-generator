import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const Popup = (props) => {
  const { options, value, onChange } = props;

  return (
    <div className={styles.wrapper}>
      {options.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className={cn(styles.item, key === value && styles.selected)}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

Popup.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Popup;
