import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import useOnclickOutside from 'react-cool-onclickoutside';

import Popup from './Popup';
import styles from './styles.module.scss';

const Dropdown = (props) => {
  const {
    value,
    name,
    onChange,
    placeholder,
    options = [],
    error,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const triggerPopup = () => setIsOpen(!isOpen);
  const hidePopup = () => setIsOpen(false);

  const changeHandler = (key) => {
    onChange(name, key);
    hidePopup();
  };
  const ref = useOnclickOutside(() => hidePopup());

  const selectedOption = options.find((o) => o.key === value);
  return (
    <div ref={ref} className={styles.wrapper} {...rest}>
      <div
        className={cn(styles.inputWrapper, Boolean(error) && styles.error)}
        onClick={triggerPopup}
      >
        <p className={styles.dropdownInput}>
          {selectedOption ? selectedOption.label : placeholder}
        </p>
        {options.length > 0 && (
          <span className={cn(styles.chevron, isOpen && styles.isOpen)} />
        )}
      </div>
      {Boolean(error) && <div className={styles.errorMsg}>{error}</div>}
      {isOpen && (
        <Popup value={value} options={options} onChange={changeHandler} />
      )}
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Dropdown;
