import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import InputContainer from 'components/form/InputContainer';

import styles from './styles.module.scss';

export const initialInputData = {
  name: '',
  surname: '',
  age: '',
  city: '',
};

const InputData = ({ data, children, onAdd }) => {
  const [state, setState] = useState(initialInputData);

  if (data.length === 0) {
    return (
      <div className={styles.wrapper}>
        <InputContainer
          type={'add'}
          data={state}
          onChange={setState}
          onAdd={onAdd}
        />
      </div>
    );
  }

  return (
    <div className={cn(styles.wrapper, data.length > 0 && styles.changeLayout)}>
      <InputContainer
        type={'add'}
        data={state}
        onChange={setState}
        onAdd={onAdd}
      />
      {children}
      <InputContainer
        type={'add'}
        data={state}
        rowAmount={2}
        onChange={setState}
        onAdd={onAdd}
      />
    </div>
  );
};

InputData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  children: PropTypes.node,
  onAdd: PropTypes.func.isRequired,
};

export default InputData;
