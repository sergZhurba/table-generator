import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const validations = {
  name: /^[A-Za-z-.‘’']+$/,
  number: /[0-9]+$/,
};

const Input = React.forwardRef(function WithRef(props, ref) {
  const {
    name,
    value: rawValue,
    error,
    placeholder,
    type,
    mode,
    onChange,
    ...rest
  } = props;

  const [focused, setFocused] = useState(false);

  const changeInput = (v) => onChange(name, v);

  const changeHandler = ({ target: { value } }) => {
    changeInput(validations[mode].test(value) ? value : '');
  };
  const focusHandler = () => setFocused(true);
  const blurHandler = ({ target: { value } }) => {
    value.trim().length === 0 && changeInput('');
    setFocused(false);
  };

  const globalInputProps = {
    value: rawValue || '',
    type: type || 'text',
    placeholder: !focused ? placeholder : '',
    className: `${cn(styles.textInput, Boolean(error) && styles.error)}`,
  };

  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        onFocus={focusHandler}
        onChange={changeHandler}
        onBlur={blurHandler}
        {...globalInputProps}
        {...rest}
      />
      {Boolean(error) && <div className={styles.errorMsg}>{error}</div>}
    </div>
  );
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['number', 'name']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
