import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

const validations = {
  name: /^[A-Za-z-.‘’']+$/,
  number: /[0-9]+$/,
};

const MAX_AGE = 100;

const Input = React.forwardRef(function WithRef(props, ref) {
  const { name, value, error, placeholder, type, mode, onChange, ...rest } =
    props;

  const [focused, setFocused] = useState(false);

  const changeInput = (v) => onChange(name, v);

  const changeHandler = ({ target: { value } }) => {
    if (value === '0') return changeInput('');
    if (mode === 'number' && Number(value) >= MAX_AGE) return;
    changeInput(validations[mode].test(value) ? value : '');
  };
  const focusHandler = () => setFocused(true);

  const globalInputProps = {
    value,
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
        onBlur={() => setFocused(false)}
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
